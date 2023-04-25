import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlayersComponent } from './players/players.component';
import { PlayerDetailComponent } from './player-detail/player-detail.component';
import { CreerPlayerComponent } from './creer-player/creer-player.component';
import { ApiComponent } from './api/api.component';
import { StandsComponent } from './stands/stands.component';

const routes: Routes = [
  {path : '', redirectTo : 'home', pathMatch : 'full'},
  {path : 'home', component : HomeComponent},
  {path : 'player', component : PlayersComponent},
  {path : 'player/:id', component : PlayerDetailComponent},
  {path : 'creer', component : CreerPlayerComponent},
  {path : 'api', component : ApiComponent},
  {path : 'stand', component : StandsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
