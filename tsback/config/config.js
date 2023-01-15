"use strict";
// import * as dotenv from "dotenv";
// dotenv.config();
exports.__esModule = true;
// type Config = {
//   username: string;
//   password: string;
//   database: string;
//   host: string;
//   dialect: string;
// };
// interface IConfigGroup {
//   development: Config;
//   test: Config;
//   production: Config;
// }
// const config: IConfigGroup = {
var config = {
    development: {
        username: "root",
        password: "mysql",
        database: "tsback",
        host: "127.0.0.1",
        dialect: "mysql"
    },
    test: {
        username: "root",
        password: "mysql",
        database: "tsback_test",
        host: "127.0.0.1",
        dialect: "mysql"
    },
    production: {
        username: "root",
        password: "mysql",
        database: "tsback_pro",
        host: "127.0.0.1",
        dialect: "mysql"
    }
};
exports["default"] = config;
