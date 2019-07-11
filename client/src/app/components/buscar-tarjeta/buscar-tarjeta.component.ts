import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesService } from '../../services/games.service';


@Component({
  selector: 'app-buscar-tarjeta',
  templateUrl: './buscar-tarjeta.component.html',
  styleUrls: ['./buscar-tarjeta.component.css']
})

export class BuscarTarjetaComponent implements OnInit {
  tarjetas ;
  tarjetasres;
  termino: string;

  constructor(private activatedRoute: ActivatedRoute,
              private gameServices: GamesService) {

  }

  ngOnInit() {

    this.gameServices.getGames().subscribe(
      res => {
          this.tarjetas = res;
          this.tarjetasres = res;
          console.log(res);
          this.metodoQueEsperaQueCopien();
      },
      err => console.error(err)
    );


  }

  metodoQueEsperaQueCopien() {
    this.activatedRoute.params.subscribe(params => {
      const palabraABuscar = 'termino';
      this.termino = params[palabraABuscar];
      this.tarjetas = this.buscarTarjeta();
    });
  }

  MostrarMensajeDeAlerta() {
    console.log( this.tarjetas);
    console.log( this.tarjetas.length);
    const cantidad = this.tarjetas.length;
    if (cantidad === 0) {
      console.log('entro');
      return true;
    }
    return false;
  }

  buscarTarjeta(): any[] {



    const gamesArray: any[] = [];
    this.termino = this.termino.toLowerCase();

    for (let i = 0 ; i < this.tarjetasres.length; i++) {

      const game = this.tarjetasres[i];

      const title = game.title.toLowerCase();
      const descripcion = game.description.toLowerCase();
      if ((title.indexOf( this.termino ) >= 0 ) || (descripcion.indexOf( this.termino ) >= 0 )) {
        game.idx = i;
        gamesArray.push(game);
      }
    }

    return gamesArray;
  }


  deleteGame(id) {
    console.log(id);
  }

}
