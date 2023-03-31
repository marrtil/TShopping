import { LOGIN_INFO } from "./LoginForm";
import { modInfo } from "./myPage/ModForm";
import { product } from "./product";
import { ProductSort } from "./Types";

// const URL = "https://tshopping-app.herokuapp.com/api";
const URL = "http://localhost:3001/api";

export async function loginCheck_process() {
  const res = await fetch(`${URL}/user/`, {
    method: "get",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    credentials: "include",
  });
  const body = await res.json();
  return body;
}

export async function logOut_process() {
  console.log("logout");
  const res = await fetch(`${URL}/user/logout`, {
    method: "post",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    credentials: "include",
  });
}

export async function login_process(userInfo: LOGIN_INFO) {
  console.log("로그인 시도... ", JSON.stringify(userInfo));
  const res = await fetch(`${URL}/user/login`, {
    method: "post",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    credentials: "include",
    body: JSON.stringify(userInfo),
  });
  const body = await res.json();
  console.log(body);
  return body;
}

export async function join_process(userInfo: {
  userId: string;
  nickname: string;
  password: string;
  email: string;
  gender: string;
}) {
  console.log("회원가입 시도... ", JSON.stringify(userInfo));
  const res = await fetch(`${URL}/user/join`, {
    method: "post",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    credentials: "include",
    body: JSON.stringify(userInfo),
  });
  console.log(res);
  const body = await res.json();
  console.log(body);
  // return body;
}

export async function getUserInfo() {
  const res = await fetch(`${URL}/user/userInfo`, {
    method: "get",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    credentials: "include",
  });
  if (!res) throw new Error("조회실패!");
  const body = await res.json();
  return body;
}

export async function getUser(userInfo: LOGIN_INFO) {
  console.log(userInfo);
  const res = await fetch(`${URL}/user/login/${userInfo.userId}`);
  if (!res) throw new Error("회원 조회에 실패했습니다");
  const body = await res.json();
  console.log(body);
  return body as LOGIN_INFO;
}

export async function joinMember(formData: FormData) {
  // FormData 타입도 세세하게 해주는게 좋을듯
  const response = await fetch(`${URL}/user/members/`, {
    method: "post",
    body: formData,
  });
  if (!response.ok) {
    throw new Error("회원정보 등록에 실패");
  }
  const body = await response.json();
  return body;
}

export async function idCheck_process(userId: string) {
  // id 중복체크
  const res = await fetch(`${URL}/user/idCheck/${userId}`);
  try {
    const body = await res.json();
  } catch (e) {
    return false;
  }
  return true;
}

export async function passwordCheck_process(checkData: {
  userId: string;
  password: string;
}) {
  // password 중복이면 true, 아니면 false
  console.log(checkData);
  const res = await fetch(`${URL}/user/passwordCheck`, {
    method: "post",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(checkData),
    // credentials: "include",
  });
  try {
    const body = await res.json();
    console.log(body);
  } catch (e) {
    return false;
  }
  return true;
}
export async function modMember(userId: string, member: modInfo) {
  const res = await fetch(`${URL}/user/mod/${userId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    // headers: { "Content-type": "multipart/form-data" },
    body: JSON.stringify(member),
    // transformRequest: (data, headers) => {
    //   return data;
    // },
  });
  if (!res) throw new Error("회원정보 수정에 실패하였습니다");
  const body = await res.json();
  return body;
}

export async function allProducts(search: string) {
  const res = await fetch(`${URL}/product/productList${search}`);
  if (!res) throw new Error("상품정보를 불러오는데 실패 했습니다.");
  const product = await res.json();
  return product;
}

export async function typeProducts(type: string) {
  const res = await fetch(`${URL}/product/productType/${type}`);
  if (!res) throw new Error("상품정보를 불러오는데 실패 했습니다.");
  const product = await res.json();
  return product;
}

export async function viewedProducts(search: string) {
  console.log(search);
  const res = await fetch(`${URL}/product/viewedProductList/${search}`);
  if (!res) throw new Error("상품정보를 불러오는데 실패 했습니다.");
  const product = await res.json();
  console.log(product);
  return product;
}

export async function productDetail(id: number) {
  const res = await fetch(`${URL}/product/productLists/${id}`);
  if (!res) throw new Error("상품정보를 불러오는데 실패 했습니다.");
  const product = await res.json();
  return product;
}

export async function gridLoad(option: ProductSort, gender: string = "") {
  const res = await fetch(
    `${URL}/product/productGrid/${option}?gender=${gender}`
  );
  if (!res) throw new Error("상품정보를 불러오는데 실패 했습니다.");
  const product = await res.json();
  return product;
}
