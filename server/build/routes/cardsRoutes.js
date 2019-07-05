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
    }
}
const cardsRoutes = new CardRoutes();
exports.default = cardsRoutes.router;
