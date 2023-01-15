"use strict";
exports.__esModule = true;
exports.sequelize = void 0;
var sequelize_1 = require("sequelize");
// import config from '../config/config';
var env = process.env.NODE_ENV || "development";
var config = require("../config/config")[env];
var username = config.username, password = config.password, database = config.database, host = config.host, dialect = config.dialect;
var sequelize = new sequelize_1.Sequelize(database, username, password, {
    host: host,
    dialect: dialect
});
exports.sequelize = sequelize;
exports["default"] = sequelize;
