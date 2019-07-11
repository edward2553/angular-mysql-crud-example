import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameListComponent } from './components/game-list/game-list.component';
import { GameFormComponent } from './components/game-form/game-form.component';
import { VerPerfilComponent } from './components/ver-perfil/ver-perfil.component';
import { CrearTarjetasComponent } from './components/crear-tarjetas/crear-tarjetas.component';
import { MyCardsComponent } from './components/my-cards/my-cards.component';
import { BuscarTarjetaComponent } from './components/buscar-tarjeta/buscar-tarjeta.component';

const routes: Routes = [
  {
    path: '',
    component: GameListComponent
  },
  {
    path: 'games',
    component: GameListComponent
  },
  {
    path: 'games/add',
    component: GameFormComponent
  },
  {
    path: 'games/edit/:id',
    component: GameFormComponent
  },
  {
    path: 'perfil/:id',
    component: VerPerfilComponent
  },
  {
    path: 'cards/add',
    component: CrearTarjetasComponent
  },
  {
    path: 'cards/myCards',
    component: MyCardsComponent
  },
  {
    path: 'cards/edit/:edit',
    component: CrearTarjetasComponent
  },
  { path: 'buscar/:termino',
   component: BuscarTarjetaComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
