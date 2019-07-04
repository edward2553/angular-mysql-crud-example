import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { observable } from 'rxjs';
import { Card } from './../../models/card';

@Injectable({
  providedIn: 'root'
})
export class TarjetasService {

  API_URL = "http://localhost:3000/api";
  constructor(private http: HttpClient) { }

  saveCard(card:Card){
    return this.http.post(this.API_URL+'/cards',card);
  }

  getUserCards(id:number){
    return this.http.post(this.API_URL+'/cards/getUserCard/',id);
  }

}
