import { Sequelize } from "sequelize";
import config from "../config/config";

const env = (process.env.NODE_ENV as "production" | "test" | "development") || "development";
const { database, username, password, host, dialect } = config[env];
const sequelize = new Sequelize(database, username, password, {
  host,
  dialect: "mysql",
});
// const {
//     //config.json객체의 정보를 변수에 저장
//     username,
//     password,
//     database,
//     host,
//     dialect,
//   } = config;
// const sequelize = new Sequelize(database, username, password, {
//     host, dialect,
// });

export { sequelize };
export default sequelize;
