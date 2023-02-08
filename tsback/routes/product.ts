import * as express from "express";
import Product from "../models/product";

const router = express.Router();
const sequelize = require("sequelize");
const Op = sequelize.Op;

router.get("/productList", async (req, res) => {
  const { searchText, gender, kind } = req.query;
  if (searchText) {
    const product = await Product.findAll({
      where: { name: { [Op.like]: `%${searchText}%` } },
      order: [["id", "DESC"]],
    });

    res.send(product);
  } else if (gender && kind) {
    var condition: string[] = [];
    var product = null;
    if (typeof kind == "string") {
      condition = kind.split(",");
      condition.length == 2
        ? (product = await Product.findAll({
            where: {gender:gender, [Op.or]: [{ kind: condition[0] }, { kind: condition[1] }] },
          }))
        : (product = await Product.findAll({
            where: {
              kind: condition[0],gender:gender
            },
          }));
      res.send(product);
    }
  } else if (gender && !kind) {
    const product = await Product.findAll({
      where: {
        gender: gender,
      },
      order: [["id", "DESC"]],
    });

    res.send(product);
  } else if (!gender && kind) {
    var condition: string[] = [];
    var product = null;
    if (typeof kind == "string") {
      condition = kind.split(",");
      condition.length == 2
        ? (product = await Product.findAll({
            where: { [Op.or]: [{ kind: condition[0] }, { kind: condition[1] }] },
          }))
        : (product = await Product.findAll({
            where: {
              kind: condition[0],
            },
          }));
      res.send(product);
    }
  } else {
    const productList = await Product.findAll();
    res.send(productList);
  }
});

router.get("/productLists/:id", async (req, res) => {
  const { id } = req.params;

  if (id) {
    const product = await Product.findOne({
      where: { id },
    });

    res.send(product);
  }
});

router.get("/productGrid/:option", async (req, res) => {
  const { option } = req.params;
  const {gender}=req.query;

  var product = null;
  if (option == "new") {
    
    product = await Product.findAll({
      order: [["id", "DESC"]],
      limit: 3,
    });
  } else if (option=="major") {
    
    product = await Product.findAll({
      order:[["sales","DESC"]],
      limit: 3,
    });
  } else if (option=="recomend") {
    gender?
    product = await Product.findAll({
      where:{gender},
      order:[["sales","DESC"]],
      limit: 3,
    }):product = await Product.findAll({
      order:[["sales","DESC"]],
      limit: 3,
    })
  }
  res.send(product);
});

router.get("/viewedProductList/:search", async (req, res) => {
  const { search } = req.params;
  const searchSplit = search.split(",");
  let productList = [];
  for (let id of searchSplit) {
    const product = await Product.findOne({ where: { id } });
    productList.push(product);
  }
  res.send(productList);
});

export default router;
