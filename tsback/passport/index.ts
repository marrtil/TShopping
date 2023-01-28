import * as passport from "passport";
import User from "../models/user";
import local from "./localStrategy";

export default () => {
  // localStrategy에서의 done의 두번째 인자를 첫번째 인자에 받음
  passport.serializeUser((user, done) => {
    // 로그인에 성공했을때 실행
    // 로그인한 유저 정보를 user에 담아서 전달받음.
    // done의 첫번째 인자로 null, 두번째 인자로 유저 정보를 식별할 수 있는 인자를 보냄.
    // 유저 정보를 식별할 수 있는 id를 통해 쿠키를 생성.
    console.log("######### serializeUser -- ", user.id);
    // done(null, user.id);
    done(null, user.id);
    // done 실행시 세션파일에 전달> ,"passport":{"user":user.id} << 여기로
  });
  passport.deserializeUser<number>(async (id, done) => {
    // 페이지에 방문할때마다 실행.
    console.log("$$$$$$$$$ deserializeUser -- ", id);
    User.findOne({ where: { id } })
      .then((user) => done(null, user))
      .catch((err) => done(err));

    // .then((user) => done(null, user)) // done의 두번째 인자를 request의 user로 넘겨준다
    // .catch((err) => done(err));
  });

  local();
};
