import * as passport from "passport";
import * as bcrypt from "bcrypt";
import { Strategy as LocalStrategy } from "passport-local";
import User from "../models/user";
// const { User } = require("../models");

export default () => {
  passport.use(
    new LocalStrategy(
      {
        usernameField: "userId",
        passwordField: "password",
        // session: false,
        // passReqToCallback: true,
      },
      async (userId, password, done) => {
        try {
          const exUser = await User.findOne({ where: { userId } });
          if (exUser) {
            const result = await bcrypt.compare(password, exUser.password!);
            if (result) {
              return done(null, exUser);
            } else {
              return done(null, false, { message: "비밀번호가 일치하지 않습니다." });
            }
          } else {
            return done(null, false, { message: "가입되지 않은 회원입니다." });
          }
        } catch (error) {
          // console.error(error);
          return done(error);
        }
      }
    )
  );
};
