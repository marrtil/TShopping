import { NextFunction, Request, Response } from "express";

const isLoggedIn = (req: Request, res: Response, next: NextFunction) => {
  console.log(" ***************** isLoggedIn", req.user?.dataValues);
  if (req.isAuthenticated()) {
    console.log("이미 로그인중!");
    next();
    // next() : 다음 콜백함수로 가라~
  } else {
    res.status(401).send("로그인이 필요합니다.");
  }
};

const isNotLoggedIn = (req: Request, res: Response, next: NextFunction) => {
  console.log(" ***************** isNotLoggedIn", req.user);
  if (!req.isAuthenticated()) {
    console.log("로그인중이 아님!");
    next();
  } else {
    const message = encodeURIComponent("로그인한 상태입니다.");
    res.redirect(`/?error=${message}`);
  }
};
export { isLoggedIn, isNotLoggedIn };
