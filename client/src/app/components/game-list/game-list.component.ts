import { Component, OnInit, HostBinding } from '@angular/core';
import { GamesService } from '../../services/games.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

  @HostBinding('class') classes = "row";

  games_array: any =[];
  constructor(private gameServices: GamesService) {}

  ngOnInit() {
  // subscribe 
    this.gameServices.getGames().subscribe(
      res =>{
          this.games_array = res;
      },
      err => console.error(err)
    );
  }

}
