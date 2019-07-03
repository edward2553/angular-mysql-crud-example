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

  verPassword = false;

  constructor(private userService: UserServiceService, private router: Router, private activatedRouter: ActivatedRoute) { }

  user: User = {
    id: 0,
    nombre: '',
    apellido: '',
    nombre_usuario: '',
    contrasena: '',
    correo: '',
    telefono: '',
    profesion: '',
    nivel_academico: '',
    imagen: ''
  };

  edit: boolean;
  showpwd = true;

  verContrasena2(asds) {
    console.log(asds);

  }

  ngOnInit() {

    const paramsURL = this.activatedRouter.snapshot.params;
    if (paramsURL.id) {
      this.userService.getOneUser(paramsURL.id)
        .subscribe(
          res => {
            console.log(res);
            this.user = res[0];
            this.edit = true;
          },
          err => console.error(err)
        );
    }
  }

  updateUser() {
    const paramsURL = this.activatedRouter.snapshot.params;
    delete this.user.id;
    const id = paramsURL.id;
    // console.log(id);
    // console.log(this.user);
    this.userService.updateUser(id, this.user).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/games']);
      },
      err => console.error(err)
    );
  }

  saveNewUSer() {
    console.log('creating a new user');
  }

}
