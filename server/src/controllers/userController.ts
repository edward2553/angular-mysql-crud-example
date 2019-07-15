import { User } from './../../../client/src/app/models/User';
import { UserServiceService } from './../../../client/src/app/services/user/user-service.service';
import {Request,Response} from 'express';
import  con  from '../database';

class userController{

    //metodos sql

    public async updateUser(req: Request, res: Response):Promise<void>{
        const  id  = parseInt(req.params.id_getOneUser,10); 
        console.log(id);
        await con.query("update usuario set ? where id = ?",[req.body,id]);
        res.json({"message":"game "+id+" has been updated successfully"});
    }

    public async getUserAndgetPassword(req: Request, res: Response):Promise<void>{
        var usuario = req.param('usuario');
        var contrasena = req.param('contrasena');
        await con.query("select * from usuario where nombre_usuario="+'' + req.body.usuario + ''+"and contraseña = " + '' + req.body.contrasena,(err:any,Rows:any,fields:any) =>{
         if(!err)
            res.json(Rows);
         else
         console.log(err);   
        });
        res.json({"message":"user has been successfully added"});
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