"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("User", [
      {
        nickname: "윤지섭",
        userId: "marrtil",
        password: "qwer1234",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nickname: "김정남",
        userId: "jungnam",
        password: "qwer1234",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("User", null, {});
  },
};
