import * as express from "express";
import * as bcrypt from "bcrypt";
import { isLoggedIn, isNotLoggedIn } from "./middleware";
import User from "../models/user";
import * as passport from "passport";
// import Post from "../models/post";

const router = express.Router();

router.get("/", isLoggedIn, (req, res) => {
  // res.header("Access-Control-Allow-Origin", "*");
  // get이 있어야 req, res 타입추론이 가능. 이외의 경우는 직접 타이핑해줘야함
  const user = req.user!;
  return res.send({ ...user.dataValues, password: null });
});

router.post("/login", isNotLoggedIn, (req, res, next) => {
  // res.header("Access-Control-Allow-Origin", "*");
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
      const userInfo: any = await User.findOne({
        where: { id: user.id },
        attributes: { exclude: ["password"] },
      });
      return res.json(userInfo);
    });
  })(req, res, next);
});

router.post("/join", isNotLoggedIn, async (req, res, next) => {
  // res.header("Access-Control-Allow-Origin", "*");
  const { userId, nickname, password, email, gender } = req.body;
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
      email,
      gender,
    });
    return res.redirect("/");
  } catch (err) {
    console.error(err);
    return next(err);
  }
});

router.post("/logout", isLoggedIn, (req, res, next) => {
  // res.header("Access-Control-Allow-Origin", "*");
  req.logout((err) => {
    if (err) return next(err);
    req.session.save(() => res.redirect("/"));
  });
});

router.get("/idCheck/:userid", async (req, res) => {
  // res.header("Access-Control-Allow-Origin", "*");
  const { userid } = req.params;
  const check = await User.findOne({ where: { userid }, attributes: ["id"] });
  res.send(check);
});

router.post("/passwordCheck", async (req, res) => {
  // res.header("Access-Control-Allow-Origin", "*");
  const { userId, password } = req.body;
  const check = await User.findOne({
    where: { userId },
  });
  const result = await bcrypt.compare(password, check!.password);
  res.send(check);
});

router.get("/userList", async (req, res) => {
  // res.header("Access-Control-Allow-Origin", "*");
  const userList = await User.findAll();
  res.send(userList);
});

router.put(
  "/mod/:userId",
  // upload.single("imageUrl"),
  async (req, res) => {
    // res.header("Access-Control-Allow-Origin", "*");
    //회원정보 수정
    const { userId } = req.params;
    const { nickname, password } = req.body;
    const hash = await bcrypt.hash(password, 12);
    console.log(userId + "+" + nickname + "+" + hash);
    // if (req.file) {
    //   const filePath = "https://ozitest.herokuapp.com/image/" + req.file.originalname; //파일이미지를 불러오기위한 경로+이미지파일 이름

    //   newInfo["imageUrl"] = filePath; //경로를 request의 json파일에 넣어 수정 해준다
    // }
    const result = await User.update({ nickname, password: hash }, { where: { userId } });
    // await Member.update({ imageUrl: req.file }, { where: { userId } });
    if (result[0]) {
      res.send({ message: `${result[0]} row(s) affected` }); //로우를 출력
    } else {
      res.status(404).send({ message: "There is no tavle with the id!" });
    }
  }
);
export default router;
