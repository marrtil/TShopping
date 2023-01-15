import { Sequelize } from "sequelize";
// import config from '../config/config';

const env = (process.env.NODE_ENV as "production" | "test" | "development") || "development";
const config = require("../config/config")[env];
const { username, password, database, host, dialect } = config;
const sequelize = new Sequelize(database, username, password, {
  host,
  dialect,
});
// const { database, username, password } = config[env];
// const sequelize = new Sequelize(database, username, password, config[env]);

export { sequelize };
export default sequelize;
