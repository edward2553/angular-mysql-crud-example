import { Router } from 'express';
import  cardsController  from '../controllers/cardsController';

class CardRoutes{
    public router:Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.post('/',cardsController.createCard);
        this.router.post('/getUserCards',cardsController.getUserCards);
    }
}

const cardsRoutes = new CardRoutes();
export default cardsRoutes.router;