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
class cardsController {
    createCard(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('insert into tarjetas set ? ', [req.body]);
            res.json({ "message": "card has been created successfully" });
        });
    }
    getUserCards(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('select * from tarjetas where ?', [req.body], (err, rows, fields) => {
                if (!err)
                    res.json(rows);
                else
                    console.log(err);
            });
        });
    }
    deletecard(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query("delete from tarjetas where id =" + '' + req.params.id_delete + '' + "", (err, rows, fields) => {
                if (!err)
                    res.json({ "message": "card successfully deleted" });
                else
                    console.log(err);
            });
        });
    }
    getOneUserCard(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query("select * from tarjetas where ?", [req.body], (err, rows, fields) => {
                if (!err)
                    res.json(rows);
                else
                    console.log(err);
            });
        });
    }
    updateCard(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(req.params.id_update, 10);
            yield database_1.default.query("update tarjetas set ? where id = ?", [req.body, id]);
            res.json({ "message": "cards has been successfully updated" });
        });
    }
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query("select * from tarjetas", (err, rows, fields) => {
                if (!err)
                    res.json(rows);
                else
                    console.log(err);
            });
        });
    }
}
const cardsClass = new cardsController();
exports.default = cardsClass;
