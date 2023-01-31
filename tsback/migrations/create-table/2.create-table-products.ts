import Product from "../../models/product";

console.log("======Create Product Table======");

const create_table_products = async () => {
  await Product.sync({ force: true })
    .then(() => {
      console.log("✅Success Create Product Table");
    })
    .catch((err: any) => {
      console.log("❗️Error in Create Product Table : ", err);
    });
};

create_table_products();
// ./node_modules/.bin/ts-node ./migrations/create-table/2.create-table-products.ts
