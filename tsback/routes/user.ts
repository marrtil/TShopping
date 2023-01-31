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
  return res.send({ ...user.dataValues, password: null });
});

router.post("/login", isNotLoggedIn, (req, res, next) => {
  // isNotLoggedIn을 통해 로그인 여부를 파악. 로그인중이 아니라면 next();
  // > 다음 콜백함수를 실행.
  console.log(" |||||||||||||||||||| post/login");
  passport.authenticate("local", (authError, user, info) => {
    // 로컬 전략을 사용할거다~
    // localStrategy을 실행.
    // 파라미터는 return done으로 받은 세녀석.
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
      // 에러가 없다면 password를 제외하고 리턴
      // db에서 다시 안불러오고 비밀번호만 쳐내도 되긴할듯ㅋㅋ 귀찮아잉
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
    // const existUser = await User.findOne({ where: { userId } });
    // if (existUser) {
    //   return res.redirect("/join?error=exist");
    // }
    // 아이디 중복체크는 이미 앞전에 했으니
    // 두 번째 인수는 hash 반복 횟수, 12 이상을 추천하며 최대 31까지 가능
    const hash = await bcrypt.hash(password, 12);
    await User.create({
      userId,
      nickname,
      password: hash,
      // email,
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
  console.log("userInfo test");
  // const user = req.user!;
  // console.log(" ||||||||||||||||| get/userInfo", user);
  // return res.send({ ...user, password: null });
});

router.get("/idCheck/:userid", async (req, res) => {
  const { userid } = req.params;
  const check = await User.findOne({ where: { userid }, attributes: ["id"] });
  res.send(check);
});

router.post("/passwordCheck", async (req, res) => {
  console.log("body", req.body);
  const { userId, password } = req.body;
  console.log(userId + " post " + password);
  const check = await User.findOne({ where: { userId, password: bcrypt.hash(password, 12) }, attributes: ["id"] });
  res.send(check);
});

router.get("/userList", async (req, res) => {
  const userList = await User.findAll();
  res.send(userList);
});

// router.post('delUser', (req, res) => {
//   User.destroy
// })

export default router;
