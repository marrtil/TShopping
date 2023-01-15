"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var express = require("express");
var middleware_1 = require("./middleware");
var user_1 = require("../models/user");
var passport = require("passport");
// import Post from "../models/post";
var router = express.Router();
router.get("/", middleware_1.isLoggedIn, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var user;
    return __generator(this, function (_a) {
        user = req.user;
        return [2 /*return*/, res.json(__assign(__assign({}, user), { password: null }))];
    });
}); });
router.get("/test", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, res.json("test성공")];
    });
}); });
// router.post("/", async (req, res, next) => {
//   try {
//     const exUser = await User.findOne({
//       where: {
//         userId: req.body.userId,
//       },
//     });
//     if (exUser) {
//       return res.status(403).send("이미 사용중인 아이디입니다.");
//     }
//     const hashedPassword = await bcrypt.hash(req.body.password, 12);
//     const newUser = await User.create({
//       nickname: req.body.nickname,
//       userId: req.body.userId,
//       password: hashedPassword,
//     });
//     return res.status(200).json(newUser);
//   } catch (err) {
//     console.error(err);
//     next(err);
//   }
// });
router.post("/login", middleware_1.isNotLoggedIn, function (req, res, next) {
    passport.authenticate("local", function (err, user, info) {
        if (err) {
            console.error(err);
            return next(err);
        }
        if (info) {
            return res.status(401).send(info.message);
        }
        return req.login(user, function (loginErr) { return __awaiter(void 0, void 0, void 0, function () {
            var fullUser, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        if (loginErr) {
                            return [2 /*return*/, next(loginErr)];
                        }
                        return [4 /*yield*/, user_1["default"].findOne({
                                where: { id: user.id },
                                // include: [
                                //   {
                                //     model: Post,
                                //     as: "Posts",
                                //     attributes: ["id"],
                                //   },
                                //   {
                                //     model: User,
                                //     as: "Followings",
                                //     attributes: ["id"],
                                //   },
                                //   {
                                //     model: User,
                                //     as: "Followers",
                                //     attributes: ["id"],
                                //   },
                                // ],
                                attributes: {
                                    exclude: ["password"]
                                }
                            })];
                    case 1:
                        fullUser = _a.sent();
                        return [2 /*return*/, res.json(fullUser)];
                    case 2:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [2 /*return*/, next(e_1)];
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    })(req, res, next);
});
// router.post("/logout", isLoggedIn, (req, res) => {
//   req.logout(() => {
//     res.redirect("/");
//   });
//   req.session!.destroy(() => {
//     res.send("logout 성공");
//   });
// });
// interface IUser extends User {
//   PostCount: number;
//   FollowingCount: number;
//   FollowerCount: number;
// }
// 특정 사용자 찾기
router.get("/:id", function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var user, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, user_1["default"].findOne({
                        where: { id: parseInt(req.params.id, 10) },
                        // include: [{
                        //     model: Post,
                        //     as: 'Posts',
                        //     attributes: ['id'],
                        // }, {
                        //     model: User,
                        //     as: 'Followings',
                        //     attributes: ['id'],
                        // }, {
                        //     model: User,
                        //     as: 'Followers',
                        //     attributes: ['id'],
                        // }],
                        attributes: ["id", "nickname"]
                    })];
            case 1:
                user = _a.sent();
                if (!user) {
                    return [2 /*return*/, res.status(404).send("no user")];
                }
                // const jsonUser = user.toJSON() as IUser;
                // jsonUser.PostCount = jsonUser.Posts ? jsonUser.Posts.length : 0;
                // jsonUser.Posts가 존재하면 length를 리턴. 없으면 0 리턴
                // jsonUser.FollowingCount = jsonUser.Followings ? jsonUser.Followings.length : 0;
                // jsonUser.FollowerCount = jsonUser.Followers ? jsonUser.Followers.length : 0;
                // return res.json(jsonUser);
                // 원하는 데이터만 뽑아서 변환해서 리턴해주기위함.
                // 이녀석들 쓰려면 models/user.ts의 User 클래스에 Posts, Followings, Followers 등록해줘야함.
                return [2 /*return*/, res.json(user)];
            case 2:
                err_1 = _a.sent();
                console.error(err_1);
                return [2 /*return*/, next(err_1)];
            case 3: return [2 /*return*/];
        }
    });
}); });
// router.get<any, any, any, { limit: string; offset: string }>(
//   "/:id/followings",
//   isLoggedIn,
//   async (req: Request<any, any, any, { limit: string; offset: string }>, res, next) => {
//     try {
//       const user = await User.findOne({
//         where: { id: parseInt(req.params.id, 10) || (req.user && req.user.id) || 0 },
//       });
//       if (!user) return res.status(404).send("no user");
//       const followings = await user.getFollowings({
//         attributes: ["id", "nickname"],
//         limit: parseInt(req.query.limit, 10),
//         offset: parseInt(req.query.offset, 10),
//       });
//       return res.json(followings);
//     } catch (e) {
//       console.error(e);
//       return next(e);
//     }
//   }
// );
// router.get<any, any, any, { limit: string; offset: string }>(
//   "/:id/followers",
//   isLoggedIn,
//   async (req: Request<any, any, any, { limit: string; offset: string }>, res, next) => {
//     try {
//       const user = await User.findOne({
//         where: { id: parseInt(req.params.id, 10) || (req.user && req.user.id) || 0 },
//       });
//       if (!user) return res.status(404).send("no user");
//       const followers = await user.getFollowers({
//         attributes: ["id", "nickname"],
//         limit: parseInt(req.query.limit, 10),
//         offset: parseInt(req.query.offset, 10),
//       });
//       return res.json(followers);
//     } catch (e) {
//       console.error(e);
//       return next(e);
//     }
//   }
// );
// router.delete("/:id/follower", isLoggedIn, async (req, res, next) => {
//   try {
//     const me = await User.findOne({
//       where: { id: req.user!.id },
//     });
//     await me!.removeFollower(parseInt(req.params.id, 10));
//     res.send(req.params.id);
//   } catch (e) {
//     console.error(e);
//     next(e);
//   }
// });
// router.post("/:id/follow", isLoggedIn, async (req, res, next) => {
//   try {
//     const me = await User.findOne({
//       where: { id: req.user!.id },
//     });
//     await me!.addFollowing(parseInt(req.params.id, 10));
//     res.send(req.params.id);
//   } catch (e) {
//     console.error(e);
//     next(e);
//   }
// });
// router.delete("/:id/follow", isLoggedIn, async (req, res, next) => {
//   try {
//     const me = await User.findOne({
//       where: { id: req.user!.id },
//     });
//     await me!.removeFollowing(parseInt(req.params.id, 10));
//     res.send(req.params.id);
//   } catch (e) {
//     console.error(e);
//     next(e);
//   }
// });
// router.get("/:id/posts", async (req, res, next) => {
//   try {
//     const posts = await Post.findAll({
//       where: {
//         UserId: parseInt(req.params.id, 10) || (req.user && req.user.id) || 0,
//         RetweetId: null,
//       },
//       include: [
//         {
//           model: User,
//           attributes: ["id", "nickname"],
//         },
//         {
//           model: Image,
//         },
//         {
//           model: User,
//           as: "Likers",
//           attributes: ["id"],
//         },
//       ],
//     });
//     res.json(posts);
//   } catch (e) {
//     console.error(e);
//     next(e);
//   }
// });
router.patch("/nickname", middleware_1.isLoggedIn, function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var e_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, user_1["default"].update({
                        nickname: req.body.nickname
                    }, {
                        where: { id: req.user.id }
                    })];
            case 1:
                _a.sent();
                res.send(req.body.nickname);
                return [3 /*break*/, 3];
            case 2:
                e_2 = _a.sent();
                console.error(e_2);
                next(e_2);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
exports["default"] = router;
