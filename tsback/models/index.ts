import User from "./user";
import Product from "./product";
export * from "./sequelize";
const Sequelize = require("sequelize");
const db = {
  User,
  Product,
};
export type dbType = typeof db;

// associateUser(db);
