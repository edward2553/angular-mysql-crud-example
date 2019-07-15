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

  constructor(private UserService: UserServiceService,private router:Router, private activatedRoute:ActivatedRoute) { }

  user:User = {
    nombre_usuario:'',
    contrasena:'',
  };


  ValidarLogin(){
    console.log("parametros enviados")
    console.log('usuario', this.user.nombre_usuario)
    console.log('contraseña', this.user.contrasena)
    this.UserService.UserValidation(this.user).subscribe(
      res =>{
        console.log("los datos del usuario son:" + res);
        this.router.navigate(['/games']);
      },
      err => console.log(err)
    );
  }

  ngOnInit() {
  }

}
