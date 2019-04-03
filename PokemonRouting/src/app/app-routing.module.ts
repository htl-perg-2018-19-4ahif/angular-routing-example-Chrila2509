import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonlistComponent } from './pokemonlist/pokemonlist.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  { path: '', redirectTo: '/pokemon', pathMatch: 'full'},
  { path: 'pokemon', component: PokemonlistComponent },
  { path: 'pokemon/:pokemonId', component: DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
