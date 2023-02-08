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
        image: "http://localhost:3001/image/moomin1.jpeg",
        price: 20000,
        discount: 15,
        count: 1,
      },
      {
        name: "무민2",
        gender: "남성",
        kind: "셔츠",
        size: "L",
        color: "베이지,그린,블루",
        image: "http://localhost:3001/image/moomin2.jpeg",
        price: 130000,
        discount: 25,
        count: 1,
      },
      {
        name: "무민3",
        gender: "여성",
        kind: "아우터",
        size: "XL",
        color: "블랙,화이트",
        image: "http://localhost:3001/image/moomin3.jpeg",
        price: 10000,
        discount: 10,
        count: 1,
      },
      {
        name: "무민4",
        gender: "여성",
        kind: "데님",
        size: "M",
        color: "생지,샐비지,워싱",
        image: "http://localhost:3001/image/moomin4.jpeg",
        price: 50000,
        discount: 15,
        count: 1,
      },
      {
        name: "무민5",
        gender: "남성",
        kind: "아우터",
        size: "M",
        color: "블랙,오렌지,네이비",
        image: "http://localhost:3001/image/moomin5.jpeg",
        price: 15000,
        discount: 20,
        count: 1,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Product", null, {});
  },
};
