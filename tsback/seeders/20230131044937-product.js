"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Product", [
      {
        name: "무민",
        gender: "남성",
        kind: "맨투맨",
        size: "M",
        color: "블랙,네이비,화이트,베이지",
        image: "moomin1",
        price: 20000,
        sale: 15,
        count: 1,
      },
      {
        name: "무민2",
        gender: "남성",
        kind: "셔츠",
        size: "L",
        color: "베이지,그린,블루",
        image: "moomin2",
        price: 130000,
        sale: 25,
        count: 1,
      },
      {
        name: "무민3",
        gender: "여성",
        kind: "재킷",
        size: "XL",
        color: "블랙,화이트",
        image: "moomin3",
        price: 10000,
        sale: 10,
        count: 1,
      },
      {
        name: "무민4",
        gender: "여성",
        kind: "청바지",
        size: "M",
        color: "생지,샐비지,워싱",
        image: "moomin4",
        price: 50000,
        sale: 15,
        count: 1,
      },
      {
        name: "무민5",
        gender: "남성",
        kind: "패딩",
        size: "M",
        color: "블랙,오렌지,네이비",
        image: "moomin5",
        price: 15000,
        sale: 20,
        count: 1,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Product", null, {});
  },
};
