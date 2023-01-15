import User from "../../models/user"; //방금 만들어준 user model

console.log("======drop User Table======");

const drop_table_users = async () => {
  await User.drop()
    .then(() => {
      console.log("✅Success Drop User Table");
    })
    .catch((err: any) => {
      console.log("❗️Error in Drop User Table : ", err);
    });
};

drop_table_users();
// ./node_modules/.bin/ts-node ./migrations/drop-table/1.drop-table-users.ts
