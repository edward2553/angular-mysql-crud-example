import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../models/User';
import { UserServiceService } from '../../services/user/user-service.service';


@Component({
  selector: 'app-ver-perfil',
  templateUrl: './ver-perfil.component.html',
  styleUrls: ['./ver-perfil.component.css']
})
export class VerPerfilComponent implements OnInit {

  constructor(private userService:UserServiceService,private router: Router, private activatedRouter: ActivatedRoute) { }

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
    imagen: ''
  };

  edit:boolean;

  ngOnInit() {

    const paramsURL = this.activatedRouter.snapshot.params;
    if(paramsURL.id){
      this.userService.getOneUser(paramsURL.id)
      .subscribe(
        res => {
          console.log(res);
          this.user = res[0];
          this.edit = true;
        },
        err => console.error(err)
      )
    }
  }

  updateUser(id:number){
    console.log("we are editing the user "+id);
  }

  saveNewUSer(){
    console.log("creating a new user");
  }

}
