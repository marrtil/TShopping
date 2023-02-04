import moomin1 from "../upload/moomin5.jpeg";
import moomin2 from "../upload/moomin6.jpeg";
import moomin3 from "../upload/moomin7.png";
import moomin4 from "../upload/moomin1.jpeg";
import moomin5 from "../upload/moomin2.jpeg";

export type product = {
  [index: string]: string | number | any;
  id: number;
  name: string;
  kind: string;
  size: string;
  color: string;
  image: string | any;
  price: number;
  sale: number;
  count: number;
};

export const initialProducts: product[] = [
  {
    id: 1,
    name: "무민",
    gender: "남성",
    kind: "맨투맨",
    size: "M",
    color: "블랙,네이비,화이트,베이지",
    image: moomin1,
    price: 20000,
    sale: 0.15,
    count: 1,
  },
  {
    id: 2,
    name: "무민2",
    size: "L",
    gender: "남성",
    kind: "셔츠",
    color: "베이지,그린,블루",
    image: moomin2,
    price: 130000,
    sale: 0.25,
    count: 1,
  },
  {
    id: 3,
    name: "무민3",
    size: "XL",
    gender: "여성",
    kind: "재킷",
    color: "블랙,화이트",
    image: moomin3,
    price: 10000,
    sale: 0.1,
    count: 1,
  },
  {
    id: 4,
    name: "무민4",
    gender: "여성",
    kind: "청바지",
    size: "M",
    color: "생지,샐비지,워싱",
    image: moomin4,
    price: 50000,
    sale: 0.15,
    count: 1,
  },
  {
    id: 5,
    name: "무민5",
    gender: "남성",
    kind: "패딩",
    size: "M",
    color: "블랙,오렌지,네이비",
    image: moomin5,
    price: 15000,
    sale: 0.2,
    count: 1,
  },
];
