import { CartData, CartProduct, DelveriyInfo, Review } from "./Types";

const URL = "https://tshopping-app.herokuapp.com/api";

// 결제하기 눌렀을 때 (productData: { productId, size, color, count})
export async function order(orderData: CartProduct[]) {
  const res = await fetch(`${URL}/order/handlePay`, {
    method: "put",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    credentials: "include",
    body: JSON.stringify(orderData),
  });

  const body = await res.json();
  return body;
  // 장바구니 비우기
}
// 장바구니 눌렀을 때 (productData: { productId, size, color, count})
// => 장바구니에 추가.
export async function cartIn(productData: CartData) {
  const res = await fetch(`${URL}/order/cartIn/`, {
    method: "post",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(productData),
    credentials: "include",
  });
  if (!res) throw new Error("cartIn is failed");
  const body = await res.json();
  return body;
}
// 장바구니

// 장바구니 불러오기 (userId)
// => 장바구니id, productId => { discount, price, image }, size, color, count
export async function cart(userId: string) {
  const res = await fetch(`${URL}/order/cart/${userId}`);
  if (!res) throw new Error("cartInfo is failed");
  const body = await res.json();
  console.log(body);
  return body;
}
// 결제하기 (위에서 불러온 데이터)
// => 장바구니 비우기.

// 장바구니에서 빼기
export async function cartOut(cartId: string) {
  const res = await fetch(`${URL}/order/cartOut/${cartId}`, {
    method: "delete",
  });
  if (!res) throw new Error("cartInfo is failed");
  const body = await res.json();
  return body;
}

// 결제 진행
export async function payCartOut(cartInfo: CartProduct[]) {
  await fetch(`${URL}/order/pay/cartOut`, {
    method: "delete",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(cartInfo),
  });
}

export async function payOrderIn(cartInfo: CartProduct[], delveriyInfo: DelveriyInfo) {
  await fetch(`${URL}/order/pay/orderIn/${delveriyInfo.id}`, {
    method: "put",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(cartInfo),
    credentials: "include",
  });
}

export async function payAddressIn(delveriyInfo: DelveriyInfo) {
  await fetch(`${URL}/order/pay/addressAdd`, {
    method: "post",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(delveriyInfo),
    credentials: "include",
  });
}

// 주소 가져오기
export async function addressLoad(userId: string) {
  const res = await fetch(`${URL}/order/addressLoad/${userId}`);
  const body = res.json();
  return body;
}

// order 가져오기
export async function orderLoad(userId: string, order_state: number, date: number) {
  const res = await fetch(`${URL}/order/orderLoad?userId=${userId}&orderState=${order_state}&date=${date}`);
  const body = await res.json();
  console.log(body);
  return body;
}

export async function orderComplete(id: string) {
  const res = await fetch(`${URL}/order/orderComplete/${id}`, {
    method: "delete",
  });
}

export async function reviewWrite(review: any) {
  const res = await fetch(`${URL}/order/review/write`, {
    method: "post",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(review),
    credentials: "include",
  });
}

export async function reviewLoadProduct(productId: string) {
  const res = await fetch(`${URL}/order/review/product/${productId}`);
  const body = await res.json();
  return body;
}

export async function reviewLoad(userId: string) {
  const res = await fetch(`${URL}/order/reviewList/${userId}`);
  const body = await res.json();
  return body;
}
