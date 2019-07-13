import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { GamesService } from '../../services/games.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {


  formGroup: FormGroup;

  arraySidebar: any;
  SidebarActivo = true;
  tarjetas;
  tarjetasres;
  precioMinimo;
  precioMaximo;
  fechadesde;
  fechahasta;
  inputGroupSelect;
  constructor(private fb: FormBuilder, private router: Router, private gameServices: GamesService) { }

  ngOnInit() {
    this.construirFormulario();


    this.gameServices.getGames().subscribe(
      res => {
        this.tarjetas = res;
        this.tarjetasres = res;
        console.log(res);
      },
      err => console.error(err)
    );
  }

  construirFormulario() {
    this.formGroup = this.fb.group({
      preciomin: [],
      preciomax: [],
      desdefecha: [],
      hastafecha: [],
      inputGroupSelect01: []
    });
  }

  clickEnbtnSidebar() {
    this.precioMinimo = this.formGroup.value.preciomin;
    this.precioMaximo = this.formGroup.value.preciomax;
    this.fechadesde = this.formGroup.value.desdefecha;
    this.fechahasta = this.formGroup.value.hastafecha;
    this.inputGroupSelect = this.formGroup.value.inputGroupSelect01;

    console.log(this.formGroup.value);
    console.log(this.precioMinimo, this.precioMaximo, this.fechadesde, this.fechahasta, this.inputGroupSelect);

    if (this.precioMinimo != null || this.precioMaximo != null || this.fechadesde != null || this.fechahasta != null || this.inputGroupSelect != null) {
      console.log('hay algo que no es null');

      this.arraySidebar = { mundo: '', nuevo: '', andres: 'el mejor', gracias: '' };
      if (this.precioMinimo != null && this.precioMaximo != null) {
        // for (let i = 0; i < this.tarjetasres.length; i++) {

        //   const game = this.tarjetasres[i];

        //   const title = game.title.toLowerCase();
        //   const descripcion = game.description.toLowerCase();
        //   if ((title.indexOf(this.termino) >= 0) || (descripcion.indexOf(this.termino) >= 0)) {
        //     game.idx = i;
        //     arraySidebar.push(game);
        //   }
        // }
      } else if (this.precioMinimo != null && this.precioMaximo == null) {
        // for (let i = 0; i < this.tarjetasres.length; i++) {

        //   const game = this.tarjetasres[i];

        //   const title = game.title.toLowerCase();
        //   const descripcion = game.description.toLowerCase();
        //   if ((title.indexOf(this.termino) >= 0) || (descripcion.indexOf(this.termino) >= 0)) {
        //     game.idx = i;
        //     arraySidebar.push(game);
        //   }
        // }
      } else if (this.precioMinimo == null && this.precioMaximo != null) {
        // for (let i = 0; i < this.tarjetasres.length; i++) {

        //   const game = this.tarjetasres[i];

        //   const title = game.title.toLowerCase();
        //   const descripcion = game.description.toLowerCase();
        //   if ((title.indexOf(this.termino) >= 0) || (descripcion.indexOf(this.termino) >= 0)) {
        //     game.idx = i;
        //     arraySidebar.push(game);
        //   }
        // }
      }

      if (this.fechadesde != null && this.fechahasta != null) {
        // for (let i = 0; i < this.tarjetasres.length; i++) {

        //   const game = this.tarjetasres[i];

        //   const title = game.title.toLowerCase();
        //   const descripcion = game.description.toLowerCase();
        //   if ((title.indexOf(this.termino) >= 0) || (descripcion.indexOf(this.termino) >= 0)) {
        //     game.idx = i;
        //     arraySidebar.push(game);
        //   }
        // }

      } else if (this.fechadesde != null && this.fechahasta == null) {
        // for (let i = 0; i < this.tarjetasres.length; i++) {

        //   const game = this.tarjetasres[i];

        //   const title = game.title.toLowerCase();
        //   const descripcion = game.description.toLowerCase();
        //   if ((title.indexOf(this.termino) >= 0) || (descripcion.indexOf(this.termino) >= 0)) {
        //     game.idx = i;
        //     arraySidebar.push(game);
        //   }
        // }

      } else if (this.fechadesde == null && this.fechahasta != null) {
        // for (let i = 0; i < this.tarjetasres.length; i++) {

        //   const game = this.tarjetasres[i];

        //   const title = game.title.toLowerCase();
        //   const descripcion = game.description.toLowerCase();
        //   if ((title.indexOf(this.termino) >= 0) || (descripcion.indexOf(this.termino) >= 0)) {
        //     game.idx = i;
        //     arraySidebar.push(game);
        //   }
        // }

      }

      if (this.inputGroupSelect != null) {
        // for (let i = 0; i < this.tarjetasres.length; i++) {

        //   const game = this.tarjetasres[i];

        //   const title = game.title.toLowerCase();
        //   const descripcion = game.description.toLowerCase();
        //   if ((title.indexOf(this.termino) >= 0) || (descripcion.indexOf(this.termino) >= 0)) {
        //     game.idx = i;
        //     arraySidebar.push(game);
        //   }
        // }
      }

      // return arraySidebar;

      // this.router.navigate(['/buscar'],     { arraySidebar: this.arraySidebar}]);
      // this.router.navigate(['/some-route'], { queryParams: queryParams });
    }
  }
}
