var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as passport from "passport";
import User from "../models/user";
import local from "./local";
export default () => {
    passport.serializeUser((user, done) => {
        // 로그인할때 한번 실행
        done(null, user.id);
    });
    passport.deserializeUser((id, done) => __awaiter(void 0, void 0, void 0, function* () {
        // 모든 요청에 대해서 매번 실행
        try {
            // 메모리에 저장했던 id를 다시 사용자 객체로 바꾸는 함수.
            const user = yield User.findOne({
                where: { id },
            });
            if (!user) {
                return done(new Error("no user"));
            }
            return done(null, user); // req.user
        }
        catch (err) {
            console.error(err);
            return done(err);
        }
    }));
    local();
};
