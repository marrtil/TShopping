import User from "./user";
export * from "./sequelize";
const Sequelize = require("sequelize");
const db = {
  User,
};
export type dbType = typeof db;

// associateUser(db);
