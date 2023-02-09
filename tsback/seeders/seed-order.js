"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Order", [
      {
        userId: "marrtil",
        addressId: "1",
        orderState: 1,
        orderDate: new Date(),
      },
      {
        userId: "marrtil",
        addressId: "1",
        orderState: 2,
        orderDate: new Date("2023-01-02"),
      },
      {
        userId: "marrtil",
        addressId: "1",
        orderState: 5,
        orderDate: new Date("2022-10-11"),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Order", null, {});
  },
};
