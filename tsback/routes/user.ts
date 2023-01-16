import * as express from "express";
import * as bcrypt from "bcrypt";
import { isLoggedIn, isNotLoggedIn } from "./middleware";
import User from "../models/user";
import * as passport from "passport";
// import Post from "../models/post";

const router = express.Router();

router.get("/", isLoggedIn, async (req, res) => {
  // get이 있어야 req, res 타입추론이 가능. 이외의 경우는 직접 타이핑해줘야함
  const user = req.user;
  return res.json({ ...user, password: null });
});

router.get("/test", async (req, res) => {
  const test1 = await User.findAll();
  // return res.json("test성공" + test1);
  res.send(test1);
});

router.get("/login/:userId", async (req, res) => {
  const { userId } = req.params;
  console.log("router in");
  const member = await User.findOne({ where: { userId } });
  if (member) {
    console.log(member);
    res.send(member);
  } else {
    res.status(404).send({ message: "There is no such member" });
  }
});

router.patch("/nickname", isLoggedIn, async (req, res, next) => {
  try {
    await User.update(
      {
        nickname: req.body.nickname,
      },
      {
        where: { id: req.user!.id },
      }
    );
    res.send(req.body.nickname);
  } catch (e) {
    console.error(e);
    next(e);
  }
});

export default router;
