import {Request,Response} from 'express';
import  con  from '../database';

class GamesController{

    public async list(req: Request,res: Response):Promise<void>{
        await con.query('select * from games',(err: any,rows: any,fieds: any)=>{
        if(!err)
        res.json(rows);
        else
        console.log(err); 
     });
    }

    public async create(req: Request, res: Response):Promise<void>{
      await con.query('insert into games set ? ', [req.body]);
      res.json({"message":"game has been created successfully"});
    }
    
    public async update(req: Request, res: Response):Promise<void>{
        const  id  = parseInt(req.params.id_update,10); 
        console.log(id);
        await con.query("update games set ? where id = ?",[req.body,id]);
        res.json({"message":"game "+id+" has been updated successfully"});
    }

    public async delete(req: Request, res: Response):Promise<void>{
        await con.query("delete from games where id ="+''+req.params.id_delete+''+"",(err: any,rows: any,fieds: any)=>{
        if(!err)
        res.json({"message":"The game has been deleted successfully"});
        else
        console.log(err); 
        });
    }

    public async getOne(req: Request, res: Response):Promise<void>{
        await con.query("select * from games where id ="+''+req.params.id_getOne+''+"",(err: any,rows: any,fieds: any)=>{
        if(!err)
        res.json(rows);
        else
        console.log(err); 
        });
    }

}

const gamesController = new GamesController();
export default gamesController;