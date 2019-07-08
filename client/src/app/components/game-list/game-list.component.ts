import { Component, OnInit} from '@angular/core';
import { GamesService } from '../../services/games.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

  GAMES_ARRAY: any = [];
  constructor(private gameServices: GamesService) {}

  ngOnInit() {
  // subscribe
    this.getGames();
  }

  getGames() {
    console.log(this.gameServices);
    this.gameServices.getGames().subscribe(
      res => {
          this.GAMES_ARRAY = res;
      },
      err => console.error(err)
    );
  }
  deleteGame(id: string) {
    this.gameServices.deleteGame(id).subscribe(
      res => {
        console.log(res);
      },
      err => console.error(err)
    );
    this.getGames();
  }


}
