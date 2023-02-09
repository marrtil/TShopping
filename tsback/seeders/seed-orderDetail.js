"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("OrderDetail", [
      {
        orderId: "1",
        productId: "1",
        productName: "무민",
        size: "XL",
        count: 2,
        color: "베이지",
      },
      {
        orderId: "2",
        productId: "1",
        productName: "무민",
        size: "L",
        count: 1,
        color: "블랙",
      },
      {
        orderId: "2",
        productId: "2",
        productName: "무민2",
        size: "XL",
        count: 3,
        color: "베이지",
      },
      {
        orderId: "3",
        productId: "3",
        productName: "무민3",
        size: "M",
        count: 1,
        color: "화이트",
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("OrderDetail", null, {});
  },
};
