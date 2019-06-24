import { Component, OnInit, HostBinding } from '@angular/core';
import { GamesService } from '../../services/games.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {



  games_array: any =[];
  constructor(private gameServices: GamesService) {}

  ngOnInit() {
  // subscribe 
    this.getGames();
  }

  getGames(){
    this.gameServices.getGames().subscribe(
      res =>{
          this.games_array = res;
      },
      err => console.error(err)
    );
  }
  deleteGame(id:string){
    this.gameServices.deleteGame(id).subscribe(
      res => {
        console.log(res)
      },
      err => console.error(err)
    );
    this.getGames();
  }

}
