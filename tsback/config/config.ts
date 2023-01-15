import * as dotenv from "dotenv";
dotenv.config();

type Config = {
  username: string;
  password: string;
  database: string;
  host: string;
  dialect: string;
};
interface IConfigGroup {
  development: Config;
  test: Config;
  production: Config;
}
const config: IConfigGroup = {
  // const config = {
  development: {
    username: "root",
    password: process.env.DB_PASSWORD || "mysql",
    database: "tsback",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  test: {
    username: "root",
    password: process.env.DB_PASSWORD || "mysql",
    database: "tsback_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: "root",
    password: process.env.DB_PASSWORD || "mysql",
    database: "tsback_pro",
    host: "127.0.0.1",
    dialect: "mysql",
  },
};
export default config;
