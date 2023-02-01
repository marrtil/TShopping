import Product from "../../models/product"; //방금 만들어준 Product model

console.log("======drop Product Table======");

const drop_table_products = async () => {
  await Product.drop()
    .then(() => {
      console.log("✅Success Drop Product Table");
    })
    .catch((err: any) => {
      console.log("❗️Error in Drop Product Table : ", err);
    });
};

drop_table_products();
// ./node_modules/.bin/ts-node ./migrations/drop-table/1.drop-table-product.ts
