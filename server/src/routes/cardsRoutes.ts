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
        this.router.delete('/deleteCard/:id_delete',cardsController.deletecard);
        this.router.post('/getOneUserCard',cardsController.getOneUserCard);
        this.router.put('/updateCard/:id_update',cardsController.updateCard);
        this.router.get('/',cardsController.list);
    }
}

const cardsRoutes = new CardRoutes();
export default cardsRoutes.router;