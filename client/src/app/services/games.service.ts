import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Game } from '../models/Game';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GamesService {

  API_URI = 'http://localhost:3000/api';
  constructor(private http: HttpClient) { }


  getGames() {

    return this.http.get(this.API_URI + '/tarjetas');
  }

  getGame(id: string) {
    return this.http.get(this.API_URI + '/tarjetas/' + id);
  }

  saveGame(game: Game) {
    return this.http.post(this.API_URI + '/tarjetas', game);
  }

  updateGame(id: string, updatedgame: Game): Observable<Game> {
    return this.http.put(this.API_URI + '/tarjetas/' + id, updatedgame);
  }

  deleteGame(id: string) {
    return this.http.delete(this.API_URI + '/tarjetas/' + id);
  }
}
