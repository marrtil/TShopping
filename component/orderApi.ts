import { CartData } from "./Types";

const URL = "http://localhost:3001";

// 결제하기 눌렀을 때 (productData: { productId, size, color, count})

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
// => 장바구니id, productId => { sale, price, image }, size, color, count
export async function cart(userId: string) {
  const res = await fetch(`${URL}/order/cart/${userId}`, {
    // credentials: "include",
  });
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
