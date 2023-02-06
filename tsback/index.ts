import * as express from "express";
import { Request, Response, NextFunction } from "express";
import * as cors from "cors";
import * as cookieParser from "cookie-parser";
import * as session from "express-session";
import * as passport from "passport";
import passportConfig from "./passport";
import userRouter from "./routes/user";
import productRouter from "./routes/product";
import orderRouter from "./routes/order";
import * as dotenv from "dotenv";
import * as hpp from "hpp"; // 배포시 보안용
import * as morgan from "morgan";
import helmet from "helmet"; // 배포시 보안용
var FileStore = require("session-file-store")(session);

dotenv.config();
const app = express();
const prod = process.env.NODE_ENV === "production";

import { sequelize } from "./models";
import Cart from "./models/cart";
import Order from "./models/order";
import OrderDetail from "./models/orderDetail";

app.set("port", prod ? process.env.PORT : 3001);

const multer = require("multer");
var storage = multer.diskStorage({
  destination: function (req: any, file: any, cb: any) {
    cb(null, "upload/"); // cb 콜백함수를 통해 전송된 파일 저장 디렉토리 설정
  },
  filename: function (req: any, file: any, cb: any) {
    cb(null, file.originalname); // cb 콜백함수를 통해 전송된 파일 이름 설정
  },
});

var upload = multer({ storage });
app.use("/image", express.static("upload"));

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("데이터베이스 연결 성공");
  })
  .catch((err: Error) => {
    console.error(err);
  });

app.use(morgan("dev"));
app.use(cors({ origin: "http://localhost:4000", credentials: true }));

app.use("/", express.static("uploads"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKIE_SECRET));
var fileStoreOptions = {
  path: "./sessions",
  reapInterval: 10,
}; // 10초마다 만료된 세션을 삭제.
app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: process.env.COOKIE_SECRET!,
    store: new FileStore(fileStoreOptions),
    cookie: {
      httpOnly: true,
      secure: false, //개발할때만 false
    },
    // cookie: { secure: false, maxAge: 4 * 60 * 60 * 1000 },
  })
);

// 세션 설정 뒤에 passport.initialize()와 passport.session()이 들어와야함.

passportConfig();
app.use(passport.initialize());
app.use(passport.session());
// app.set("port", prod ? process.env.PORT : 3065);
app.use("/user", userRouter);
app.use("/product", productRouter);
app.use("/order", orderRouter);

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
