import {Request,Response} from 'express';
import  con  from '../database';

class cardsController{

    public async createCard(req: Request, res: Response):Promise<void>{
        await con.query('insert into tarjetas set ? ', [req.body]);
        res.json({"message":"card has been created successfully"});
      }

}

const cardsClass = new cardsController(); 
export default cardsClass;