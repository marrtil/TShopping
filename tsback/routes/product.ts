import * as express from "express";
import Product from "../models/product";

const router = express.Router();

router.get("/productList", async (req, res) => {
  const productList = await Product.findAll();
  res.send(productList);
});

export default router;
