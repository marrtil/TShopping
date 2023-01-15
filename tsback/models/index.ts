import User, { associate as associateUser } from "./user";
// import Image, { associate as associateImage } from "./image";
// import Post, { associate as associatePost } from "./post";
export * from "./sequelize";
const db = {
  User,
  // Image,
  // Post,
};

export type dbType = typeof db;

// associateUser(db);
// associateImage(db);
// associatePost(db);
