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
  await Cart.create({
    userId,
    productId,
    size,
    color,
    count,
  });
});

router.get("/cart", isLoggedIn, async (req, res) => {
  const { userId } = req.user?.dataValues;
  const cart = await Cart.findAll({ where: { userId } });
  console.log(cart);
});
export default router;
