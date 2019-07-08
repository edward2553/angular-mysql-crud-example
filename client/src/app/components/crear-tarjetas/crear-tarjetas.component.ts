import { Component, OnInit } from '@angular/core';
import { Card } from './../../models/card';
import { TarjetasService } from './../../services/cards/tarjetas.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-crear-tarjetas',
  templateUrl: './crear-tarjetas.component.html',
  styleUrls: ['./crear-tarjetas.component.css']
})
export class CrearTarjetasComponent implements OnInit {

  card:Card = {
    id_persona:1,
    title : '',
    description : '',
    precio : 0,
    image: ''
  };

  constructor(private cardService: TarjetasService,private router:Router) { }

  ngOnInit() {
  }

  guardarTarjeta(){
    this.cardService.saveCard(this.card).subscribe(
      res =>{
        console.log(res)
        this.router.navigate(['/games']);
      },
      err => console.log(err)
    );
  }

}
