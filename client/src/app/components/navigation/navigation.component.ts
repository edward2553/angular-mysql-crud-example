import { Component, OnInit } from '@angular/core';
import { User } from './../../models/User';
import { UserServiceService } from '../../services/user/user-service.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  user: User = {
    id: 1,
    nombre: '',
    apellido: '',
    nombre_usuario: '',
    contrasena: '',
    correo: '',
    telefono: '',
    profesion: '',
    nivel_academico: '',
    image: ''
  };


  constructor(private userService: UserServiceService,
              private router: Router) { }

              public isLogged: boolean = false;
              public isnotLogged: boolean = true;
  ngOnInit() {
    // this.obtenerUsuario(1);
  }



  // obtenerUsuario(id: number) {
  //   this.userService.getOneUser(id).subscribe(
  //     res => {
  //       console.log(res);
  //       this.user = res[0];
  //       return res[0].id;
  //     },
  //     err => console.error(err)
  //   );
  // }

  buscarTarjeta(termino: string) {
    console.log(termino);
    // this.router.navigate(['/cards/add']);
    this.router.navigate(['/buscar', termino]);
  }


}
