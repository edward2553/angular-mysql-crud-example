import {Request,Response} from 'express';
import  con  from '../database';
import { promises } from 'fs';
import { request } from 'https';
import { is } from 'bluebird';

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

  public async list(req:Request, res:Response):Promise<void>{
    await con.query("select * from tarjetas",(err:any,rows:any,fields:any)=>{
      if(!err)
        res.json(rows);
      else
        console.log(err);  
    });
  }

  public async addToFavorite(req:Request,res: Response):Promise<void>{
    await con.query("insert into tarjetas_guardadas set ?",[req.body]);  
    res.json({"mesagge":"cards has been added to your favorites"});
  }

  public async getfaviroteCards(req:Request,res:Response):Promise<void>{
    await con.query("select * from tarjetas_guardadas inner join tarjetas on tarjetas_guardadas.id_persona = tarjetas.id_persona AND tarjetas_guardadas.id_tarjeta = tarjetas.id_tarjeta",(err:any,rows:any,fields:any)=>{
      if(!err)
        res.json(rows);
      else
        console.log(err);  
    });
  }

  public async deleteFromFavorite(req:Request,res:Response):Promise<void>{
    var id = parseInt(req.params.id);
    await con.query("delete from tarjetas_guardadas where id ="+ '' + id +''+"",(err:any,rows:any,fields:any)=>{
      if(!err)
        res.json({"message":"card successfully deleted"});
      else
        console.log(err);
    });
    
  }
  

}


const cardsClass = new cardsController(); 
export default cardsClass;