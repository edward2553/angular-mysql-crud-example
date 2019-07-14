import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserServiceService } from '../../services/user/user-service.service';


@Component({
  selector: 'app-ver-perfil',
  templateUrl: './ver-perfil.component.html',
  styleUrls: ['./ver-perfil.component.css']
})
export class VerPerfilComponent implements OnInit {

   verPassword = false;

  constructor(private userService: UserServiceService, private router: Router, private activatedRouter: ActivatedRoute) { }

  user = {
    id: 0,
    nombre: '',
    apellido: '',
    nombre_usuario : '',
    contrasena: '',
    correo: '',
    telefono: '',
    profesion: '',
    nivel_academico: '',
    image: '',
  };

  edit: boolean;
  showpwd = true;
  image: string = '';

  verContrasena2(asds) {
    console.log(asds);

  }

  ngOnInit() {

    const paramsURL = this.activatedRouter.snapshot.params;
    let id = parseInt(paramsURL.id);
    if (id) {

      this.userService.getOneUser(id)
      .subscribe(
        res => {
          console.log(res[0]);
          this.image = res[0].image;
          this.user = res[0];
          this.edit = true;
        },
        err => console.error(err)
      );
    }
  }

  updateUser(id: number) {
    delete this.user.id;
    this.userService.updateUser(id, this.user).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/tarjetas']);
      },
      err => console.error(err)
    );
  }

  saveNewUSer() {
    console.log('creating a new user');
   }

}
