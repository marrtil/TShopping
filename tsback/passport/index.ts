import * as passport from "passport";
import User from "../models/user";
import local from "./localStrategy";

export default () => {
  passport.serializeUser((user, done) => {
    // 로그인할때 한번 실행
    // 유저 정보를 식별할 수 있는 id를 통해 쿠키를 생성.
    done(null, user.id);
  });

  passport.deserializeUser<number>(async (id, done) => {
    User.findOne({
      where: { id },
    })
      .then((user) => done(null, user))
      .catch((err) => done(err));
  });

  local();
};
