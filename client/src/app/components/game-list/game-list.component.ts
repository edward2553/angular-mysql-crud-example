import { Component, OnInit} from '@angular/core';
import { GamesService } from '../../services/games.service';
import { TarjetasService } from '../../services/cards/tarjetas.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  tarjetas ;
  constructor(private gameServices: GamesService,  private cardsService: TarjetasService) {}

  ngOnInit() {

    this.getAllCards();
  }

  getAllCards() {
    this.cardsService.getAllCards().subscribe(
      res => {
        console.log(res),
        this.tarjetas = res;
      },
     err =>
      console.log(err)
    );
  }

  deleteGame(id: string) {
    this.gameServices.deleteGame(id).subscribe(
      res => {
        console.log(res);
      },
      err => console.error(err)
    );
  }


}
