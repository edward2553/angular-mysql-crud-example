import { NgModule } from '@angular/core';
//este modulo permite definir modulos en la aplicacion
import { Routes, RouterModule } from '@angular/router';
import { GameListComponent } from './components/game-list/game-list.component';
import { GameFormComponent } from "./components/game-form/game-form.component";
import { VerPerfilComponent } from './components/ver-perfil/ver-perfil.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
