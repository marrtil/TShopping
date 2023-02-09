"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Address", [
      {
        userId: "martil",
        zoneCode: "29473",
        address: "미추홀구 매소홀로 167",
        addressDetail: "102동 1203호",
        deliveryMemo: "배송 전 연락 부탁드립니다",
        recipient: "김수령자",
        phone: "01022222222",
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Address", null, {});
  },
};
