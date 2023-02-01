import User from "./user";
import Product from "./product";
import Address from "./address";
import Cart from "./cart";
import Order from "./order";
import OrderDetail from "./orderDetail";
import Review from "./review";
import ViewedGoods from "./viewedGoods";
export * from "./sequelize";
const Sequelize = require("sequelize");
const db = {
  User,
  Product,
  Address,
  Cart,
  Order,
  OrderDetail,
  Review,
  ViewedGoods,
};
export type dbType = typeof db;

// associateUser(db);
