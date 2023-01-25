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
