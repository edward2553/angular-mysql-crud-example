import { Router } from 'express';
import  cardsController  from '../controllers/cardsController';

class CardRoutes{
    public router:Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.post('/',cardsController.createCard);
    }
}

const cardsRoutes = new CardRoutes();
export default cardsRoutes.router;