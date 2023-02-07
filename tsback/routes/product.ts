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
    const product = await Product.findAll({
      where: {
        gender: gender,
        kind: kind,
      },
      order: [["id", "DESC"]],
    });

    res.send(product);
  } else if (gender && !kind) {
    const product = await Product.findAll({
      where: {
        gender: gender,
      },
      order: [["id", "DESC"]],
    });

    res.send(product);
  } 
  else if(!gender&& kind){
    var condition:string[] = [];
    var product=null;
    if(typeof(kind)=="string")
    {condition=kind.split(",");
    console.log(condition[0],condition[1],condition.length);
    condition.length==2?product = await Product.findAll({
     where:{ [Op.or]:[
        {kind:condition[0]},
        {kind:condition[1]}
      ]
    },
    }):product = await Product.findAll({
     where:{ 
        kind:condition[0]
      },
    })
    res.send(product);
  }}
    
  else {
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

  var product=null
  if (option=="new") {
     product = await Product.findAll({
      order:[["updatedAt","ASC"]],
      limit:3
    });
  }
  else if("major"){
    product=await Product.findAll({
      limit:3,
    });
  }
  else if("recomend"){
    product=await Product.findAll({
      limit:3,
    });
  }
    res.send(product);
  
});

export default router;
