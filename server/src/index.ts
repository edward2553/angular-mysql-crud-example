import express,{ Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';

import indexRoutes from './routes/indexRoutes';
import gameRoutes from './routes/gameRoutes';
import userRoutes from './routes/userRoutes';
import cardRoutes from './routes/cardsRoutes'; 

const bodyParser = require('body-parser');
class Server {

    public app: Application;
    constructor(){
        this.app = express();
        this.config();
        this.routes();
    }

    config(): void{
        this.app.set('port',process.env.PORT || 3000);
        this.app.use(morgan("dev"));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false})); // enviar desde un formulario html
        this.app.use(bodyParser.json());
    }
    routes(): void{
        this.app.use('/',indexRoutes);
        this.app.use('/api/games',gameRoutes);
        this.app.use('/api/user',userRoutes);
        this.app.use('/api/cards',cardRoutes);
    }
    start(): void{
        this.app.listen(this.app.get('port'), () => {
            console.log('server executing on port ', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();