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

  id ={
    "id":4
  }

  card:Card = {
    id_persona:1,
    title : '',
    description : '',
    precio : 0,
    image: ''
  };

  edit:boolean = false;
  constructor(private cardService: TarjetasService,private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    this.edit = params.edit;
    if(this.edit){
      console.log("editar:"+this.edit);
      this.obtenerTarjeta();
    }

  }

  guardarOEditar(){
    if(this.edit){
      
    }else{
      this.guardarTarjeta();
    }
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

  obtenerTarjeta(){
    this.cardService.obtenerTarjeta(this.id).subscribe(
      res =>{
        console.log(res);
        this.card = res[0];
      },
      err => console.log(err)
    );
  }  

  editarTarjeta(){

  }

}
