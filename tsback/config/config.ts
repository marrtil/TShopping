import * as dotenv from "dotenv";
dotenv.config();

module.exports = {
  development: {
    username: "root",
    password: process.env.DB_PASSWORD!,
    database: "tshop-dev",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  test: {
    username: "root",
    password: process.env.DB_PASSWORD!,
    database: "tshop-test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: "root",
    password: process.env.DB_PASSWORD!,
    database: "tshop-pro",
    host: "127.0.0.1",
    dialect: "mysql",
  },
};
