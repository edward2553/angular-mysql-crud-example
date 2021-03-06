"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cardsController_1 = __importDefault(require("../controllers/cardsController"));
class CardRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.post('/', cardsController_1.default.createCard);
        this.router.post('/getUserCards', cardsController_1.default.getUserCards);
        this.router.delete('/deleteCard/:id_delete', cardsController_1.default.deletecard);
        this.router.post('/getOneUserCard', cardsController_1.default.getOneUserCard);
        this.router.put('/updateUser/:id_update', cardsController_1.default.updateCard);
        this.router.get('/', cardsController_1.default.list);
    }
}
const cardsRoutes = new CardRoutes();
exports.default = cardsRoutes.router;
