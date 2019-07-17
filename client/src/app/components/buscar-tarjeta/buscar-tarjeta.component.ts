import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TarjetasService } from './../../services/cards/tarjetas.service';


@Component({
  selector: 'app-buscar-tarjeta',
  templateUrl: './buscar-tarjeta.component.html',
  styleUrls: ['./buscar-tarjeta.component.css']
})

export class BuscarTarjetaComponent implements OnInit {
  tarjetas ;
  tarjetasres;
  termino: string;

  constructor(private activatedRouter: ActivatedRoute, private cardsService: TarjetasService) {

  }

  ngOnInit() {
    this.getAllCards();
    this.metodoQueEsperaQueCopien();
  }

  aggToFavorite(id_persona:number,id_tarjeta:number){
    console.log("id de la tarjeta = "+id_tarjeta);
    this.cardsService.agregarAFavorita(id_persona,id_tarjeta).subscribe(
      res => {
        console.log(res);
      },
      err =>
        console.log(err)
    );
  }

  getAllCards() {
    this.cardsService.getAllCards().subscribe(
      res => {
        console.log(res),
        this.tarjetas = res;
        this.tarjetasres = res;
      },
     err =>
      console.log(err)
    );
  }

  metodoQueEsperaQueCopien() {
    this.activatedRouter.params.subscribe(params => {
      const palabraABuscar = 'termino';
      this.termino = params[palabraABuscar];
      this.tarjetas = this.buscarTarjeta();
    });
  }


  buscarTarjeta(): any[] {


    console.log(this.termino);
    const gamesArray: any[] = [];
    this.termino = this.termino.toLowerCase();
    console.log(this.tarjetasres);

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



}
