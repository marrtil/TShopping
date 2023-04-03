import { product } from "../../product";

export type tableType = {
  [index: string]: string;
  블랙: string;
  화이트: string;
  네이비: string;
  그린: string;
  블루: string;
  베이지: string;
  오렌지: string;
  생지: string;
  샐비지: string;
  워싱: string;
};

export const colorTable: tableType = {
  블랙: "black",
  화이트: "white",
  네이비: "navy",
  그린: "green",
  블루: "blue",
  베이지: "beige",
  오렌지: "orange",
  생지: "blue",
  샐비지: "navy",
  워싱: "skyblue",
  브라운: "brown",
  퍼플: "purple",
};

export const initialproduct: product = {
  id: 1,
  name: "",
  gender: "",
  kind: "",
  size: "",
  color: "",
  image: "",
  price: 0,
  discount: 0,
  count: 0,
};
