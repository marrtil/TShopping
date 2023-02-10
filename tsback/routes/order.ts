import * as express from "express";
import Product from "../models/product";
import Order from "../models/order";
import Cart from "../models/cart";
import { isLoggedIn } from "./middleware";
import OrderDetail from "../models/orderDetail";
import Address from "../models/address";
import { Op } from "sequelize";
import Review from "../models/review";

const router = express.Router();

// 결제하기(장바구니 수정)
router.put("/handlePay", async (req, res) => {
  for (let product of req.body) {
    console.log(product);
    const order = await Cart.update({ ...product }, { where: { id: product.id } });
  }
});

router.delete("/pay/cartOut", async (req, res) => {
  for (let item of req.body) {
    if (item.productId) {
      await Cart.destroy({ where: { id: item.id } });
    }
  }
});

router.put("/pay/orderIn/:addressId", isLoggedIn, async (req, res) => {
  console.log("pay2");
  const { userId } = req.user?.dataValues;
  const { addressId } = req.params;
  const order = await Order.create({ userId, addressId, orderState: 0, orderDate: new Date() });
  for (let product of req.body) {
    const { size, count, color, name } = product;
    let { productId } = product;
    if (!product.productId) productId = product.id;
    await OrderDetail.create({
      userId,
      orderId: order.dataValues.id,
      productId,
      productName: name,
      size,
      count,
      color,
    });
    await Product.increment(
      {
        sales: 1,
      },
      { where: { id: productId } }
    );
  }
});

router.post("/pay/addressAdd", isLoggedIn, async (req, res) => {
  const { id, zoneCode, address, addressDetail, deliveryMemo, recipient, phone0, phone1, phone2 } = req.body;
  const { userId } = req.user?.dataValues;
  if (id === "0") {
    await Address.create({
      zoneCode,
      userId,
      address,
      addressDetail,
      deliveryMemo,
      recipient,
      phone: String(phone0) + phone1 + phone2,
    });
  } else {
    console.log("이미 있는 주소.");
  }
});

router.put("/productSales", async (req, res) => {
  const salesCheck = Product.findOne();
});

// 장바구니 담기
router.post("/cartIn", isLoggedIn, async (req, res) => {
  const { userId } = req.user?.dataValues;
  const { productId, size, color, count } = req.body;
  try {
    const cart = await Cart.create({
      userId,
      productId,
      size,
      color,
      count,
    });
    return res.send(cart);
  } catch (err) {
    res.send(err);
  }
});

router.get("/cart/:userId", async (req, res) => {
  // const { userId } = req.user?.dataValues;
  const { userId } = req.params;
  const cart = await Cart.findAll({ where: { userId }, attributes: ["id", "productId", "count", "size", "color"] });
  var cartList: any = [];
  for (let product of cart) {
    const pro = await Product.findOne({
      where: { id: product.productId },
      attributes: ["name", "price", "discount", "image"],
    });
    // console.log(pro);
    const newObj = { ...product.dataValues, ...pro!.dataValues };
    cartList.push(newObj);
  }
  res.json(cartList);
});

router.get("/cart/product/:id", async (req, res) => {
  const { id } = req.params;
  console.log(req.params);
  const product = await Product.findOne({ where: { id } });
  res.json(product);
});

router.delete("/cartOut/:id", async (req, res) => {
  const { id } = req.params;
  const deleteCart = await Cart.destroy({ where: { id } });
  if (deleteCart) {
    res.send({ message: `${deleteCart} row(s) deleted` });
  } else {
    res.status(404).send({ message: "failed delete." });
  }
});

router.get("/productList", async (req, res) => {
  const productList = await Product.findAll();
  res.send(productList);
});

router.delete("/cart/allDel", async (req, res) => {
  // const deleteCart = await Cart.destroy({ truncate: true });
  // if (deleteCart) {
  //   res.send({ message: `${deleteCart} row(s) deleted` });
  // } else {
  //   res.status(404).send({ message: "failed delete." });
  // }
  const deleteOrder = await Order.destroy({ truncate: true });

  const deleteOrderDetail = await OrderDetail.destroy({ truncate: true });

  res.end();
});

router.get("/addressLoad/:userId", async (req, res) => {
  const { userId } = req.params;
  const address = await Address.findAll({ where: { userId } });
  if (address) res.send(address);
});

router.get("/orderLoad", async (req, res) => {
  const { userId, orderState, date } = req.query;
  let order;
  if (orderState !== "9" && date !== "0") {
    order = await Order.findAll({
      where: {
        userId,
        orderState,
        orderDate: {
          [Op.gte]: new Date(Date.parse(String(new Date())) - Number(date)),
        },
      },
      attributes: ["id", "orderState", "orderDate"],
    });
  } else if (orderState !== "9" && date === "0") {
    order = await Order.findAll({
      where: {
        userId,
        orderState,
      },
      attributes: ["id", "orderState", "orderDate"],
    });
  } else if (orderState === "9" && date !== "0") {
    order = await Order.findAll({
      where: {
        userId,
        orderDate: {
          [Op.gte]: new Date(Date.parse(String(new Date())) - Number(date)),
        },
      },
      attributes: ["id", "orderState", "orderDate"],
    });
  } else {
    order = await Order.findAll({
      where: {
        userId,
      },
      attributes: ["id", "orderState", "orderDate"],
    });
  }
  let orderList = [];
  for (let o of order) {
    const detail = await OrderDetail.findAll({
      where: { orderId: o.id },
      attributes: ["productId", "productName", "size", "count", "color"],
    });

    const newObj = { ...o.dataValues, detail };
    orderList.push(newObj);
  }
  res.send(orderList);
});

router.delete("/orderComplete/:id", async (req, res) => {
  const { id } = req.params;
  await Order.destroy({ where: { id } });
});

router.post("/review/write", isLoggedIn, async (req, res) => {
  const { userId } = req.user?.dataValues;
  const { orderId, productId, size, color, rating, content } = req.body;
  const productName = await Product.findOne({ where: { id: productId }, attributes: ["name"] });
  if (productName) {
    const { name } = productName.dataValues;
    await Review.create({ name, userId, orderId, productId, size, color, rating, content });
  }
});

router.get("/reviewList/:userId", async (req, res) => {
  const { userId } = req.params;
  const review = await Review.findAll({ where: { userId } });
  res.send(review);
});
router.get("/review/product/:productId", async (req, res) => {
  const { productId } = req.params;
  const review = await Review.findAll({ where: { productId } });
  res.send(review);
});

router.delete("/review/delete/:id", isLoggedIn, async (req, res) => {
  const { id } = req.params;
});

export default router;
