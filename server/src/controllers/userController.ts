import {Request,Response} from 'express';
import  con  from '../database';
var bcrypt = require('bcryptjs');

class userController{
    
     

    //metodos sql

    public async updateUser(req: Request, res: Response):Promise<void>{
        const  id  = parseInt(req.params.id_getOneUser,10); 
        console.log(id);
        await con.query("update usuario set ? where id = ?",[req.body,id]);
        res.json({"message":"game "+id+" has been updated successfully"});
    }

    public async getUserLogin(req:Request, res:Response):Promise<void>{
        await con.query("select * from usuario where nombre_usuario ="+"'"+req.params.id+"'"+" and contrasena="+"'"+req.params.password+"'"+"",(err: any,rows: any,fieds: any)=>{
            if(!err){
                
                 
                res.json(rows);
            }
            else
                console.log(err); 
            });
      }

    public async getOneUser(req: Request, res: Response):Promise<void>{
        await con.query("select * from usuario where id ="+''+req.params.id_getOneUser+''+"",(err: any,rows: any,fieds: any)=>{
        if(!err)
        res.json(rows);

        else
        console.log(err); 
        });
     }


}

const userClass = new userController(); 
export default userClass;