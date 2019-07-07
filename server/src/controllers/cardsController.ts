import {Request,Response} from 'express';
import  con  from '../database';

class cardsController{

    public async createCard(req: Request, res: Response):Promise<void>{
        await con.query('insert into tarjetas set ? ', [req.body]);
        res.json({"message":"card has been created successfully"});
      }

    public async getUserCards(req: Request, res: Response):Promise<void>{
      await con.query('select * from tarjetas where ?',[req.body],(err:any,rows:any,fields:any)=>{
        if(!err)
        res.json(rows);
        else
        console.log(err);
      });
    }
  

}

const cardsClass = new cardsController(); 
export default cardsClass;