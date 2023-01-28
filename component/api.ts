import { LOGIN_INFO } from "./LoginForm";

const URL = "http://localhost:3001";

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
  console.log("####################### res - ", res);
  const body = await res.json();
  console.log("####################### body - ", body);
  return body;
}

export async function join_process(userInfo: { userId: string; nickname: string; password: string }) {
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
  console.log(formData);
  console.log(JSON.stringify(formData));
  const response = await fetch(`${URL}/user/members/`, {
    method: "POST",
    body: formData,
  });
  if (!response.ok) {
    throw new Error("회원정보 등록에 실패");
  }
  const body = await response.json();
  return body;
}
