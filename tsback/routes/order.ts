import * as express from "express";
import Product from "../models/product";
import Order from "../models/order";
import Cart from "../models/cart";
import { isLoggedIn } from "./middleware";

const router = express.Router();

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
      attributes: ["name", "price", "sale", "image"],
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

export default router;
