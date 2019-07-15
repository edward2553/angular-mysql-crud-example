import { Router } from 'express';
import  userController  from '../controllers/userController';

class UserRoutes{
    public router:Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/',userController.getUserAndgetPassword);
        this.router.get('/:id_getOneUser,',userController.getOneUser);
        this.router.put('/:id_getOneUser',userController.updateUser);

    }
}

const userRoutes = new UserRoutes();
export default userRoutes.router;