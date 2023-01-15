import User from "../../models/user"; //방금 만들어준 user model

console.log("======Create User Table======");

const create_table_users = async () => {
  await User.sync({ force: true })
    .then(() => {
      console.log("✅Success Create User Table");
    })
    .catch((err: any) => {
      console.log("❗️Error in Create User Table : ", err);
    });
};

create_table_users();
// ./node_modules/.bin/ts-node ./migrations/create-table/1.create-table-users.ts
