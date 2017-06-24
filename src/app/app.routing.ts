import { PokedexComponent } from './../components/pokedex/pokedex.component';
import { PokeInfoComponent } from './../components/poke-info/poke-info.component';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'index', pathMatch: 'full'},
  {path: 'index', component: PokedexComponent},
  {path: 'pokemon', component: AppComponent },
  {path: 'pokemon/:id', component: PokedexComponent }
];

export const routing = RouterModule.forRoot(routes, {useHash: true});
