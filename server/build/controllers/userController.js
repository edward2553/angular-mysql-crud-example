"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class userController {
    //metodos sql
    getOneUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query("select * from usuario where id =" + '' + req.params.id_getOneUser + '' + "", (err, rows, fieds) => {
                if (!err)
                    res.json(rows);
                else
                    console.log(err);
            });
        });
    }
}
const userClass = new userController();
exports.default = userClass;
