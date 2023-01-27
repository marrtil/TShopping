import * as express from "express";
import { Request, Response, NextFunction } from "express";
import * as cors from "cors";
import * as cookieParser from "cookie-parser";
import * as session from "express-session";

import userRouter from "./routes/user";
import * as dotenv from "dotenv";
import * as hpp from "hpp"; // 배포시 보안용
import * as morgan from "morgan";
import helmet from "helmet"; // 배포시 보안용
var FileStore = require("session-file-store")(session);

dotenv.config();
const app = express();
const prod = process.env.NODE_ENV === "production";

import { sequelize } from "./models";

app.set("port", prod ? process.env.PORT : 3001);

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("데이터베이스 연결 성공");
  })
  .catch((err: Error) => {
    console.error(err);
  });

app.use(morgan("dev"));
app.use(cors({ origin: true, credentials: true }));

app.use("/", express.static("uploads"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKIE_SECRET));

// const path = require("path");

// var SQLiteStore = require("connect-sqlite3")(session);
// app.use(express.static(path.join(__dirname, "public")));
// app.use(
//   session({
//     secret: process.env.COOKIE_SECRET!,
//     resave: false,
//     saveUninitialized: false,
//     store: new SQLiteStore({ db: "sessions.db", dir: "./db" }),
//   })
// );

app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: process.env.COOKIE_SECRET!,
    store: new FileStore(),
  })
);

// 세션 설정 뒤에 passport.initialize()와 passport.session()이 들어와야함.
import * as passport from "passport";
import passportConfig from "./passport";

passportConfig();
app.use(passport.initialize());
app.use(passport.session());
// app.set("port", prod ? process.env.PORT : 3065);
app.use("/user", userRouter);

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  // req, res, next 타입은 생략가능.
  res.send("tsback 정상 작동!");
  return "tsback 정상 작동!";
});

// app.listen(app.get("port"), () => {
//   console.log(`server is running on ${app.get("port")}`);
// });

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`${port} 접속 성공`);
});
