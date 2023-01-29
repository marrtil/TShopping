import * as express from "express";
import * as bcrypt from "bcrypt";
import { isLoggedIn, isNotLoggedIn } from "./middleware";
import User from "../models/user";
import * as passport from "passport";
// import Post from "../models/post";

const router = express.Router();

router.get("/", isLoggedIn, (req, res) => {
  // get이 있어야 req, res 타입추론이 가능. 이외의 경우는 직접 타이핑해줘야함
  const user = req.user!;
  console.log(" ||||||||||||||||| get/", user);
  return res.json({ ...user, password: null });
});

router.post("/login", isNotLoggedIn, (req, res, next) => {
  console.log(" |||||||||||||||||||| post/login");
  passport.authenticate("local", (authError, user, info) => {
    if (authError) {
      console.error(authError);
      return next(authError);
    }
    if (!user) {
      console.log(`/?loginError=${info.message}`);
      return res.redirect(`/?loginError=${info.message}`);
    }
    return req.login(user, async (loginError) => {
      if (loginError) {
        console.error(loginError);
        return next(loginError);
      }
      // console.log(res);
      const userInfo = await User.findOne({
        where: { id: user.id },
        attributes: { exclude: ["password"] },
      });
      return res.json(userInfo);
    });
  })(req, res, next);
});

router.post("/join", isNotLoggedIn, async (req, res, next) => {
  const { userId, nickname, password } = req.body;
  try {
    const existUser = await User.findOne({ where: { userId } });
    if (existUser) {
      return res.redirect("/join?error=exist");
    }
    // 두 번째 인수는 hash 반복 횟수, 12 이상을 추천하며 최대 31까지 가능
    const hash = await bcrypt.hash(password, 12);
    await User.create({
      userId,
      nickname,
      password: hash,
    });
    return res.redirect("/");
  } catch (err) {
    console.error(err);
    return next(err);
  }
});

router.post("/logout", isLoggedIn, (req, res, next) => {
  req.logout((err) => {
    if (err) return next(err);
  });
  // req.session.destroy((err) => res.redirect("/"));
  req.session.save(() => res.redirect("/"));
});

router.get("/userInfo", (req, res) => {
  // get이 있어야 req, res 타입추론이 가능. 이외의 경우는 직접 타이핑해줘야함
  const user = req.user!;
  console.log(" ||||||||||||||||| get/", user);
  return res.json({ ...user, password: null });
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

router.get("/userList", async (req, res) => {
  const userList = await User.findAll();
  res.send(userList);
});

export default router;
