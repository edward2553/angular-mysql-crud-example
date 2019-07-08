import { NgModule } from '@angular/core';
//este modulo permite definir modulos en la aplicacion
import { Routes, RouterModule } from '@angular/router';
import { GameListComponent } from './components/game-list/game-list.component';
import { GameFormComponent } from "./components/game-form/game-form.component";
import { VerPerfilComponent } from './components/ver-perfil/ver-perfil.component';
import { CrearTarjetasComponent } from './components/crear-tarjetas/crear-tarjetas.component';
import { MyCardsComponent } from './components/my-cards/my-cards.component';

const routes: Routes = [
  {
    //como se va a llamar nuestra ruta
    path: '',
    redirectTo: '/games',
    pathMatch: 'full'
  },
  {
    path: 'games',
    component: GameListComponent
  },
  {
    path: "games/add",
    component: GameFormComponent
  },
  {
    path: "games/edit/:id",
    component: GameFormComponent
  },
  {
    path: "perfil/:id",
    component: VerPerfilComponent
  },  
  {
    path: "cards/add",
    component: CrearTarjetasComponent
  },
  {
    path: "cards/myCards",
    component: MyCardsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
