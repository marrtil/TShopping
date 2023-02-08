import OrderDetail from "../../models/orderDetail";

console.log("======Create orderDetail Table======");

const create_table_orderDetails = async () => {
  await OrderDetail.sync({ force: true })
    .then(() => {
      console.log("✅Success Create orderDetail Table");
    })
    .catch((err: any) => {
      console.log("❗️Error in Create orderDetail Table : ", err);
    });
};

create_table_orderDetails();
// ./node_modules/.bin/ts-node ./migrations/create-table/2.create-table-orderDetail.ts
