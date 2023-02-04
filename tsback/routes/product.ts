import * as express from "express";
import Product from "../models/product";
import { productAll, genderCheck } from "./products";

const router = express.Router();
const sequelize = require("sequelize");
const Op = sequelize.Op;

router.get("/productList", async (req, res) => {
  // 스터디 검색
  const { searchText, gender, kind } = req.query;
  console.log(searchText + "," + gender + "," + kind);
  const keys = Object.keys(productAll);
  const genders = Object.keys(genderCheck);
  if (searchText) {
    const product = await Product.findAll({
      where: { name: { [Op.like]: `%${searchText}%` } },
      order: [["id", "DESC"]],
    });

    res.send(product);
  } else if (gender && kind) {
    const product = await Product.findAll({
      where: {
        gender: genders.find((value) => genderCheck[value] == gender),
        kind: keys.find((key) => productAll[key] == kind),
      },
      order: [["id", "DESC"]],
    });

    res.send(product);
  } else if (gender && !kind) {
    const product = await Product.findAll({
      where: {
        gender: genders.find((value) => genderCheck[value] == gender),
      },
      order: [["id", "DESC"]],
    });

    res.send(product);
  } else {
    const productList = await Product.findAll();
    console.log(productList);
    res.send(productList);
  }
});

export default router;
