"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const gameRoutes_1 = __importDefault(require("./routes/gameRoutes"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const cardsRoutes_1 = __importDefault(require("./routes/cardsRoutes"));
const bodyParser = require('body-parser');
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan_1.default("dev"));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false })); // enviar desde un formulario html
        this.app.use(bodyParser.json());
    }
    routes() {
        this.app.use('/', indexRoutes_1.default);
        this.app.use('/api/tarjetas', gameRoutes_1.default);
        this.app.use('/api/user', userRoutes_1.default);
        this.app.use('/api/cards', cardsRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('server executing on port ', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
