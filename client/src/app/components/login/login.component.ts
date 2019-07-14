import {  UserServiceService } from './../../services/user/user-service.service';
import { User } from './../../models/User';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user2: any = []

  constructor(private UserService: UserServiceService,private router:Router, private activatedRoute:ActivatedRoute) { }

  user:User = {
    nombre_usuario:'',
    contrasena:'',
  };


  ValidarLogin(){
    this.UserService.UserValidation(this.user).subscribe(
      res =>{
        console.log("los datos del usuario son:" + res);
        this.user2 = res;
        console.log(this.user2[0]);
        if(this.user2[0] === undefined){
          var mensaje = document.createTextNode("El usuario no existe, por favor ingrese de nuevo las credenciales");
          var elementoP = document.createElement("h4");
          elementoP.appendChild(mensaje);
          document.getElementById("Mensaje").appendChild(elementoP);
        }else if(this.user2[0].nombre_usuario == this.user.nombre_usuario && this.user2[0].contrasena == this.user.contrasena ){
          this.router.navigate(['/games']);
        }
      },
      err => console.log(err)
    );
  }

  ngOnInit() {
  }

}
