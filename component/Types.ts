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
  imageUrl: string;
  imageFile: string;
}

export const INITIAL_USERINFO: UserInfo = {
  userId: "",
  nickname: "",
  name: "",
  password: "",
  passwordCheck: "",
  email: "",
  imageUrl: "",
  imageFile: "",
};

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
  orderDate: string;
  id: number;
  orderState: number;
  detail: detail[];
}
export interface detail {
  productId: number;
  productName: string;
  price: number;
  count: number;
  color: string;
  size: string;
}

export const INIITIAL_ORDERLIST: Order = {
  orderDate: "",
  id: 0,
  orderState: 0,
  detail: [{ productId: 0, productName: "", price: 0, count: 0, color: "", size: "" }],
};

export interface Review extends detail {
  name: string;
  userId: string;
  orderId: number;
  rating: number;
  content: string;
  createdAt: string;
}

export const INITIAL_REVIEW: Review = {
  name: "",
  userId: "",
  orderId: 0,
  rating: 0,
  content: "",
  createdAt: "",
  productId: 0,
  productName: "",
  price: 0,
  count: 0,
  color: "",
  size: "",
};

///////////////상품리스트관련/////////////////

export type productWomenT = {
  [index: string]: string;
  아우터: string;
  가디건: string;
  셔츠: string;
  드레스: string;
  탑: string;
  후디: string;
  티셔츠: string;
  팬츠: string;
  스커트: string;
  데님: string;
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
  데님: string;
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
  discount: number;
  image: string;
}
export const INITIAL_CARTPRODUCT: CartProduct = {
  id: 0,
  name: "",
  price: 0,
  discount: 0,
  image: "",
  productId: 0,
  size: "",
  color: "",
  count: 1,
};

//////////////////////////// 주소&배송

export interface address {
  zoneCode: string;
  address: string;
  addressDetail: string;
}

export const INITIAL_ADDRESS: address = {
  zoneCode: "",
  address: "",
  addressDetail: "",
};

export interface DelveriyInfo extends address {
  // userId: string;
  id: string; // order에 들어가야겠지?
  recipient: string; // 수령인 - orderDetail
  phone: string;
  phone0: string; // 연락처 - orderDetail
  phone1: string;
  phone2: string;
  deliveryMemo: string; // 요청사항 - orderDetail
  paySelect: string;
}

export const INITIAL_DELEVERIYINFO: DelveriyInfo = {
  id: "0",
  zoneCode: "",
  address: "",
  addressDetail: "",
  // userId: "",
  deliveryMemo: "",
  recipient: "",
  phone: "010",
  phone0: "010",
  phone1: "",
  phone2: "",
  paySelect: "",
};
