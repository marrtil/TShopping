import User from "../../models/user"; //방금 만들어준 user model
import Product from "../../models/product";
import Address from "../../models/address";
import Cart from "../../models/cart";
import Order from "../../models/order";
import OrderDetail from "../../models/orderDetail";
import Review from "../../models/review";
import ViewedGoods from "../../models/viewedGoods";
console.log("======Create User Table======");
const tableArr = [User, Product, Address, Cart, Order, OrderDetail, Review, ViewedGoods];
tableArr.forEach(async (table) => {
  await table
    .sync({ force: true })
    .then(() => {
      console.log(`✅Success ${table} Create Table`);
    })
    .catch((err: any) => {
      console.log(`❗️Error in ${table} Create Table : `, err);
    });
});

// ./node_modules/.bin/ts-node ./migrations/create-table/create-table-all.ts
