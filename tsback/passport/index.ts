import * as passport from "passport";
import User from "../models/user";
import local from "./local";

export default () => {
  passport.serializeUser((user, done) => {
    // 로그인할때 한번 실행
    done(null, user.id);
  });

  passport.deserializeUser<number>(async (id, done) => {
    // 모든 요청에 대해서 매번 실행
    try {
      // 메모리에 저장했던 id를 다시 사용자 객체로 바꾸는 함수.
      const user = await User.findOne({
        where: { id },
      });
      if (!user) {
        return done(new Error("no user"));
      }
      return done(null, user); // req.user
    } catch (err) {
      console.error(err);
      return done(err);
    }
  });

  local();
};
