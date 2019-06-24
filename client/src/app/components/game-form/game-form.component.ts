import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/models/Game';
import { GamesService } from '../../services/games.service'
import { Router, ActivatedRoute } from '@angular/router'; 
@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.css']
})
export class GameFormComponent implements OnInit {



  game : Game = {
    id: 0,
    title: '',
    description: '',
    image : '',
    created_at:new Date()
  };

  edit : boolean = false;

  constructor(private gameService: GamesService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    //parametros de la ruta
    const params = this.activatedRoute.snapshot.params;
    if(params.id){
      this.gameService.getGame(params.id)
      .subscribe(
        res => {
          console.log(res);
          this.game = res[0];
          this.edit = true;
        },
        err => console.error(err)
      )
    }
  }

  saveNewGame(){
    delete this.game.created_at;
    delete this.game.id;
    this.gameService.saveGame(this.game).subscribe(
      res => {
        console.log(res)
        this.router.navigate(['/games']);
      },
      err => console.error(err)
    );
  }

  updateGame(id: string){
    delete this.game.created_at;
    delete this.game.id;
    this.gameService.updateGame(id,this.game).subscribe(
      res => {
        console.log(res)
        this.router.navigate(['/games']);
      },
      err => console.error(err)
    );
  }

}
