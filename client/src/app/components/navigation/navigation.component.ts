import { Component, OnInit } from '@angular/core';
import { User } from './../../models/User';
import { UserServiceService } from '../../services/user/user-service.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private userService:UserServiceService) { }

  ngOnInit() {
    this.obtenerUsuario(1);
  }

  user : User = {
    id: 0,
    nombre: '',
    apellido: '',
    nombre_usuario : '',
    contrasena: '',
    correo: '',
    telefono: '',
    profesion: '',
    nivel_academico: '',
    image: ''
  };

  obtenerUsuario(id:number){
    this.userService.getOneUser(id).subscribe(
      res => {
        console.log(res);
        this.user = res[0];
      },
      err => console.error(err)
    )
  }

  
}
