import { Component, OnInit } from '@angular/core';
import { TarjetasService } from './../../services/cards/tarjetas.service';

@Component({
  selector: 'app-mis-tarjetas-favoritas',
  templateUrl: './mis-tarjetas-favoritas.component.html',
  styleUrls: ['./mis-tarjetas-favoritas.component.css']
})
export class MisTarjetasFavoritasComponent implements OnInit {

  cards_array: any = [];
  constructor(private cardService: TarjetasService) { }

  ngOnInit() {
    this.getUserFavoriteCards();
  }

  getUserFavoriteCards(){
    this.cardService.getfaviroteCards().subscribe(
      res =>{
        console.log(res)
        this.cards_array = res;
      },
      err => console.log(err)
    );
  }

  eliminarDeFavoritas(id:number){
    this.cardService.deleteFromFavorite(id).subscribe(
      res=>{
        console.log(id);
        console.log(res);
      },
      err =>console.log(err)
    );
    this.getUserFavoriteCards();
  }


  

}
