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
  return res.json("test성공");
});

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

router.post("/login", isNotLoggedIn, (req, res, next) => {
  passport.authenticate("local", (err: Error, user: User, info: { message: string }) => {
    if (err) {
      console.error(err);
      return next(err);
    }
    if (info) {
      return res.status(401).send(info.message);
    }
    return req.login(user, async (loginErr: Error) => {
      try {
        if (loginErr) {
          return next(loginErr);
        }
        const fullUser = await User.findOne({
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
            exclude: ["password"],
            // 비밀번호 제외하고 가져오기(보안)
          },
        });
        return res.json(fullUser);
      } catch (e) {
        console.error(e);
        return next(e);
      }
    });
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
router.get("/:id", async (req, res, next) => {
  try {
    const user = await User.findOne({
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
      attributes: ["id", "nickname"],
    });
    if (!user) {
      return res.status(404).send("no user");
    }
    // const jsonUser = user.toJSON() as IUser;
    // jsonUser.PostCount = jsonUser.Posts ? jsonUser.Posts.length : 0;
    // jsonUser.Posts가 존재하면 length를 리턴. 없으면 0 리턴
    // jsonUser.FollowingCount = jsonUser.Followings ? jsonUser.Followings.length : 0;
    // jsonUser.FollowerCount = jsonUser.Followers ? jsonUser.Followers.length : 0;
    // return res.json(jsonUser);
    // 원하는 데이터만 뽑아서 변환해서 리턴해주기위함.
    // 이녀석들 쓰려면 models/user.ts의 User 클래스에 Posts, Followings, Followers 등록해줘야함.
    return res.json(user);
  } catch (err) {
    console.error(err);
    return next(err);
  }
});

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
