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
class GamesController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('select * from games', (err, rows, fieds) => {
                if (!err)
                    res.json(rows);
                else
                    console.log(err);
            });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('insert into games set ? ', [req.body]);
            res.json({ "message": "game has been created successfully" });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(req.params.id_update, 10);
            console.log(id);
            yield database_1.default.query("update games set ? where id = ?", [req.body, id]);
            res.json({ "message": "game " + id + " has been updated successfully" });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query("delete from games where id =" + '' + req.params.id_delete + '' + "", (err, rows, fieds) => {
                if (!err)
                    res.json({ "message": "The game has been deleted successfully" });
                else
                    console.log(err);
            });
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query("select * from games where id =" + '' + req.params.id_getOne + '' + "", (err, rows, fieds) => {
                if (!err)
                    res.json(rows);
                else
                    console.log(err);
            });
        });
    }
}
const gamesController = new GamesController();
exports.default = gamesController;
