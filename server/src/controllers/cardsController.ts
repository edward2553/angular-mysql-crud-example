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

    public async deletecard(req:Request,res:Response):Promise<void>{
      await con.query("delete from tarjetas where id ="+''+req.params.id_delete+''+"",(err:any,rows:any,fields:any)=>{
        if(!err)
          res.json({"message":"card successfully deleted"});
        else
          console.log(err);
      });
    }
  
    public async getOneUserCard(req:Request, res:Response):Promise<void>{
      await con.query("select * from tarjetas where ?",[req.body],(err:any,rows:any,fields:any)=>{
        if(!err)
          res.json(rows);
        else
        console.log(err);
      })
    }

    public async updateCard(req:Request, res:Response):Promise<void>{
      const id = parseInt(req.params.id_update,10);
      await con.query("update tarjetas set ? where id = ?",[req.body,id]);
      res.json({"message":"cards has been successfully updated"});
    }

    
    public async update(req: Request, res: Response):Promise<void>{
      const  id  = parseInt(req.params.id_update,10); 
      await con.query("update games set ? where id = ?",[req.body,id]);
      res.json({"message":"game "+id+" has been updated successfully"});
  }
}

const cardsClass = new cardsController(); 
export default cardsClass;