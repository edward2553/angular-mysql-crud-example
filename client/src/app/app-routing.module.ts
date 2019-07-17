import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VerPerfilComponent } from './components/ver-perfil/ver-perfil.component';
import { CrearTarjetasComponent } from './components/crear-tarjetas/crear-tarjetas.component';
import { MyCardsComponent } from './components/my-cards/my-cards.component';
import { BuscarTarjetaComponent } from './components/buscar-tarjeta/buscar-tarjeta.component';
import { MisTarjetasFavoritasComponent } from './components/mis-tarjetas-favoritas/mis-tarjetas-favoritas.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: ':isLogged', component: BuscarTarjetaComponent },
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
  {
    path: 'buscar/:termino',
    component: BuscarTarjetaComponent
  },
  {
    path: 'cards/favorites',
    component: MisTarjetasFavoritasComponent
  },
  {
    path: 'user/login',
    component: LoginComponent
  },
  {
    path: 'user/login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
