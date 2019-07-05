import { Component, OnInit } from '@angular/core';
import { TarjetasService } from './../../services/cards/tarjetas.service';

@Component({
  selector: 'app-my-cards',
  templateUrl: './my-cards.component.html',
  styleUrls: ['./my-cards.component.css']
})
export class MyCardsComponent implements OnInit {


  constructor(private cardService: TarjetasService) { }

  ngOnInit() {

  }

  getUserCards(){
    
  }
  // guardarTarjeta(){
  //   this.cardService.saveCard(this.card).subscribe(
  //     res =>{
  //       console.log(res)
  //       this.router.navigate(['/games']);
  //     },
  //     err => console.log(err)
  //   );
  // }

}
