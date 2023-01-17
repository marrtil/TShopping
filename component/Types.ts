export type ProductSort = "new" | "major" | "recomend";

export interface InputName {
  [userId: string]: string;
  name: string;
  password: string;
  passwordCheck: string;
  email: string;
}
export interface UserInfo {
  [userId: string]: string;
  name: string;
  password: string;
  passwordCheck: string;
  email: string;
  imageUrl: string | any;
  imageFile: string | any;
}
