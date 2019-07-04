import { Router } from 'express';
import  gamesController  from '../controllers/gamesController';

class GamesRoutes{
    public router:Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/',gamesController.list);
        this.router.get('/:id_getOne',gamesController.getOne);
        this.router.post('/',gamesController.create);
        this.router.put('/:id_update',gamesController.update);
        this.router.delete('/:id_delete',gamesController.delete);
    }
}

const indexRoutes = new GamesRoutes();
export default indexRoutes.router;