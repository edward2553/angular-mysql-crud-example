import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { observable } from 'rxjs';
import { Card } from './../../models/card';

@Injectable({
  providedIn: 'root'
})
export class TarjetasService {

  API_URL = 'http://localhost:3000/api';
  constructor(private http: HttpClient) { }

  saveCard(card: Card) {
    return this.http.post(this.API_URL + '/cards', card);
  }

  getUserCards(id) {
    return this.http.post(this.API_URL + '/cards/getUserCards', id);
  }

  deleteCard(id: number) {
    return this.http.delete(this.API_URL + '/cards/deleteCard/' + id);
  }

  actualizarTarejeta(card: Card, id: number) {
    return this.http.put(this.API_URL + '/cards/updateCard/' + id, card);
  }

  obtenerTarjeta(id) {
    return this.http.post(this.API_URL + '/cards/getOneUserCard', id);
  }

  getAllCards() {
    return this.http.get(this.API_URL + '/cards');
  }


}
