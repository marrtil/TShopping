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
console.log("======drop User Table======");
const drop_table_users = () => __awaiter(void 0, void 0, void 0, function* () {
    yield User.drop()
        .then(() => {
        console.log("✅Success Drop User Table");
    })
        .catch((err) => {
        console.log("❗️Error in Drop User Table : ", err);
    });
});
drop_table_users();
// ./node_modules/.bin/ts-node ./migrations/drop-table/1.drop-table-users.ts
