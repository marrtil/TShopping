import * as express from "express";
import Product from "../models/product";
import { productAll, genderCheck } from "./products";

const router = express.Router();
const sequelize = require("sequelize");
const Op = sequelize.Op;
const multer = require("multer");
var storage = multer.diskStorage({
  destination: function (req: any, file: any, cb: any) {
    cb(null, "upload/"); // cb 콜백함수를 통해 전송된 파일 저장 디렉토리 설정
  },
  filename: function (req: any, file: any, cb: any) {
    cb(null, file.originalname); // cb 콜백함수를 통해 전송된 파일 이름 설정
  },
});

var upload = multer({ storage });
router.use("/image", express.static("upload"));

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
