import * as express from "express";
import { Request, Response, NextFunction } from "express";
import * as cors from "cors";
import * as cookieParser from "cookie-parser";
import * as expressSession from "express-session";
import * as passport from "passport";
import passportConfig from "./passport";
import userRouter from "./routes/user";

passportConfig();

const sequelize = require("sequelize");
const Op = sequelize.Op;

const app = express();

const prod = process.env.NODE_ENV === "production";

app.use(express.json());

app.use(cors());

const path = require("path");
app.use(express.static(path.join(__dirname, "../")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../", "index.html"));
});

app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
  expressSession({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET!,
    cookie: {
      httpOnly: true,
      secure: false, // https -> true
      domain: prod ? ".tshopping.com" : undefined,
    },
    name: "rnbck",
  })
); // 이 뒤에 passport.initialize()와 passport.session()이 들어와야함.
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
