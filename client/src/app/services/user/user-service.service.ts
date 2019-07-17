import { User } from './../../models/User';
import { Injectable } from '@angular/core';
//encargado de hacer las peticiones http
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  API_URI = "http://localhost:3000/api";
  constructor(private http: HttpClient) { }

  getOneUser(id:number){
    return this.http.get(this.API_URI+'/user/'+id);
  }

  updateUser(id:number,user:User):Observable<User>{
    return this.http.put(this.API_URI+'/user/'+id,user);
  }


  UserValidation(user:User){
    return this.http.get(this.API_URI + '/user/userLogin/'+user.nombre_usuario+'/'+user.contrasena);
    
  }
}
