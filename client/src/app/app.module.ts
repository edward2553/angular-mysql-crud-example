import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { GameFormComponent } from './components/game-form/game-form.component';
import { GameListComponent } from './components/game-list/game-list.component';
import { GamesService } from './services/games.service';
import { UserServiceService } from './services/user/user-service.service';
import { FormsModule } from '@angular/forms';
import { VerPerfilComponent } from './components/ver-perfil/ver-perfil.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    GameFormComponent,
    GameListComponent,
    VerPerfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    GamesService,
    UserServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
