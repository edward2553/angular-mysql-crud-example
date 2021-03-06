import { Component, OnInit } from '@angular/core';
import { TarjetasService } from './../../services/cards/tarjetas.service';

@Component({
  selector: 'app-my-cards',
  templateUrl: './my-cards.component.html',
  styleUrls: ['./my-cards.component.css']
})
export class MyCardsComponent implements OnInit {

  cards_array: any = [];
  mensajeBorrado: any = [];
  id ={
    "id_persona":1
  }
  constructor(private cardService: TarjetasService) { }

  ngOnInit() {
    this.getUserCards(this.id);
  }

  getUserCards(id:any){
    this.cardService.getUserCards(id).subscribe(
      res =>{
        console.log(res)
        this.cards_array = res;
      },
      err => console.log(err)
    );
  }

  
  deleteCard(id:number){
    this.cardService.deleteCard(id).subscribe(
      res =>{
        this.mensajeBorrado = res;
      },
      err => console.log(err)
    );
    this.getUserCards(this.id);
  }

}
