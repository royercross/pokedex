import { PokedexComponent } from './../components/pokedex/pokedex.component';
import { routing } from './app.routing';
import { PokeInfoComponent } from './../components/poke-info/poke-info.component';
import { PokeListComponent } from './../components/poke-list/poke-list.component';
import { PokemonService } from './../_services/pokemon.service';
import { Http, HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    PokedexComponent,
    PokeListComponent,
    PokeInfoComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing
  ],
  providers: [
    PokemonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
