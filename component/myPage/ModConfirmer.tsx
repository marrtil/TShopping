import * as React from "react";
import { useMemo } from "react";

type confirmProps = {
  colors: boolean;
  text: number;
};

function ModConfirmer({ colors, text }: confirmProps) {
  const confirmText = [
    "패스워드는 4~12글자 이내이어야 합니다.",
    "공백이 포함될 수 없습니다.",
    "사용 가능한 비밀번호입니다.",
    "비밀번호가 일치합니다.",
    "비밀번호가 일치하지 않습니다!!",
  ];
  const confirmStyle = useMemo(() => {
    if (colors) return { color: "green" };
    else return { color: "red" };
  }, [colors]);
  return <p style={confirmStyle}>{confirmText[text]}</p>;
}

export default ModConfirmer;
