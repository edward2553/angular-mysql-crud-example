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
    updateUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(req.params.id_getOneUser, 10);
            console.log(id);
            yield database_1.default.query("update usuario set ? where id = ?", [req.body, id]);
            res.json({ "message": "game " + id + " has been updated successfully" });
        });
    }
    getUserAndgetPassword(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var usuario = req.param('usuario');
            var contrasena = req.param('contrasena');
            yield database_1.default.query("select * from usuario where nombre_usuario=" + '' + req.body.usuario + '' + "and contraseña = " + '' + req.body.contrasena, (err, Rows, fields) => {
                if (!err)
                    res.json(Rows);
                else
                    console.log(err);
            });
            res.json({ "message": "user has been successfully added" });
        });
    }
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
