import { PokeListComponent } from './../components/poke-list/poke-list.component';
import { PokedexComponent } from './../components/pokedex/pokedex.component';
import { PokeInfoComponent } from './../components/poke-info/poke-info.component';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'pokedex/', pathMatch: 'full'},
  { path: 'pokedex', redirectTo: 'pokedex/', pathMatch: 'full'},
  { path: 'pokedex/:id', component: PokedexComponent }
];

export const routing = RouterModule.forRoot(routes, {useHash: true});
