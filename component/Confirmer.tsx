import * as React from "react";
import { useMemo } from "react";

type confirmProps = {
  colors: boolean;
  text: number;
};

function Confirmer({ colors, text }: confirmProps) {
  const confirmText = [
    "아이디는 5글자 이상이어야 합니다.",
    "공백 또는 특수문자(!,@,#,$...)가 포함될 수 없습니다.",
    "이미 사용중이거나 탈퇴한 아이디입니다.",
    "사용 가능한 이이디입니다.",
    "비밀번호가 일치합니다.",
    "비밀번호가 일치하지 않습니다!!",
  ];
  const confirmStyle = useMemo(() => {
    if (colors) return { color: "green" };
    else return { color: "red" };
  }, [colors]);
  return (
    <p id="passwordCheck" style={confirmStyle}>
      {confirmText[text]}
    </p>
  );
}

export default Confirmer;
