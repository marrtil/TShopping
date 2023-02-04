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
  nickname: string;
  name: string;
  password: string;
  passwordCheck: string;
  email: string;
  imageUrl: string | any;
  imageFile: string | any;
}
export interface User {
  [userId: string]: string;
  nickname: string;
  // email: string;
}

////////////////// 아래로 물건 관련 //////////////////////////////

export type orderState =
  | "입금/결제"
  | "배송중/픽업대기"
  | "배송완료/픽업완료"
  | "구매확정"
  | "교환"
  | "교환완료"
  | "환불"
  | "환불완료"
  | "전체보기";

export interface Order {
  name: string;
  price: number;
  count: number;
  orderDate: string;
  orderNum: number;
  orderState: orderState;
}

export interface Review {
  name: string;
  userId: string;
  orderNum: number;
  rating: number;
  content: string;
  reviewDate: string;
}

///////////////상품리스트관련/////////////////

export type productWomenT = {
  [index: string]: string;
  아우터: string;
  가디건: string;
  셔츠: string;
  블라우스: string;
  니트: string;
  후드티: string;
  티셔츠: string;
  팬츠: string;
  스커트: string;
  언더웨어: string;
  신발: string;
};

export type productManT = {
  [index: string]: string;
  팬츠: string;
  아우터: string;
  수트: string;
  후드티: string;
  맨투맨: string;
  니트: string;
  가디건: string;
  스웨터: string;
  셔츠: string;
  언더웨어: string;
  신발: string;
};

export type productAllT = {
  [index: string]: string;
  팬츠: string;
  아우터: string;
  수트: string;
  후드티: string;
  맨투맨: string;
  니트: string;
  가디건: string;
  스웨터: string;
  셔츠: string;
  언더웨어: string;
  신발: string;

  블라우스: string;

  티셔츠: string;

  스커트: string;
};

/////////////////////////////// 장바구니
export interface CartData {
  productId: number;
  size: string;
  color: string;
  count: number;
}
export interface CartProduct extends CartData {
  id: number;
  name: string;
  price: number;
  sale: number;
  image: string;
}
