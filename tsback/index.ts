import * as express from "express";
import { Request, Response, NextFunction } from "express";
// import * as morgan from "morgan";
import * as cors from "cors";
// import * as cookieParser from "cookie-parser";
// import * as expressSession from "express-session";
// import * as dotenv from "dotenv";
// import * as passport from "passport";
// import * as hpp from "hpp";
// import helmet from "helmet";

// import userRouter from "./routes/user";

// dotenv.config();
const app = express();
const prod = process.env.NODE_ENV === "production";
app.use(express.json());
app.use(cors());
// const prod: boolean

// if (prod) {
//   app.use(hpp());
//   app.use(helmet());
//   app.use(morgan("combined"));
//   app.use(
//     cors({
//       origin: /nodebird\.com$/,
//       credentials: true,
//     })
//   );
// } else {
//   app.use(morgan("dev"));
//   app.use(
//     cors({
//       origin: true,
//       credentials: true,
//     })
//   );
// }
// app.use("/", express.static("uploads"));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser(process.env.COOKIE_SECRET));
// app.use(
//   expressSession({
//     resave: false,
//     saveUninitialized: false,
//     secret: process.env.COOKIE_SECRET!,
//     cookie: {
//       httpOnly: true,
//       secure: false, // https -> true
//       domain: prod ? ".tshopping.com" : undefined,
//     },
//     name: "rnbck",
//   })
// );
// app.use(passport.initialize());
// app.use(passport.session());
// app.use("/user", userRouter);
// app.use('/post', postRouter);
// app.use('/posts', postsRouter);
// app.use('/hashtag', hashtagRouter);

// app.set("port", prod ? process.env.PORT : 3065);

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
