import { LOGIN_INFO } from "./LoginForm";

const URL = "http://localhost:3001";

export async function test() {
  const res = await fetch(URL);
  // const body = await res.json();
  console.log(res);
  return res;
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
