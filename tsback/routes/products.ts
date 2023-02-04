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

export type genderFilter = {
  [index: string]: string;
  남성: "man";
  여성: "women";
};
export const genderCheck: genderFilter = {
  남성: "man",
  여성: "women",
};

export const productAll: productAllT = {
  아우터: "outter",
  가디건: "cardigan",
  셔츠: "shirts",
  블라우스: "blouse",
  니트: "neat",
  후드티: "hood",
  티셔츠: "T-shirts",
  팬츠: "pants",
  스커트: "skirt",
  언더웨어: "under-wear",
  신발: "shoes",

  수트: "suit",
  맨투맨: "manman",

  스웨터: "sweater",
};

export type product = {
  [index: string]: string | number | any;
  id: number;
  name: string;
  kind: string;
  size: string;
  color: string;
  src: string | any;
  price: number;
  sale: number;
  count: number;
};
