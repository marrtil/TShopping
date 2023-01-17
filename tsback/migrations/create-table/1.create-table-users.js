var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import User from "../../models/user"; //방금 만들어준 user model
console.log("======Create User Table======");
const create_table_users = () => __awaiter(void 0, void 0, void 0, function* () {
    yield User.sync({ force: true })
        .then(() => {
        console.log("✅Success Create User Table");
    })
        .catch((err) => {
        console.log("❗️Error in Create User Table : ", err);
    });
});
create_table_users();
// ./node_modules/.bin/ts-node ./migrations/create-table/1.create-table-users.ts
