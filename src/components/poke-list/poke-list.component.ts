import { Router } from '@angular/router';
import { PokemonService } from './../../_services/pokemon.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.css']
})
export class PokeListComponent implements OnInit {

  pokemones: any;

  constructor(private pokemonService: PokemonService,
              private router: Router) { }

  ngOnInit() {
    this.pokemonService.getPokemones()
      .subscribe( (result) => {
        this.pokemones = result.pokemon_entries;
        console.log(this.pokemones);
      })
  }

  showPokemon(pokemon: any) {
    console.log("show pokemon", pokemon);
    if ('speechSynthesis' in window) {
       const speech = new SpeechSynthesisUtterance(pokemon.pokemon_species.name);
       speech.lang = 'en-US';
       window.speechSynthesis.speak(speech);
    }

    this.router.navigate(['/pokemon', pokemon.entry_number]);
    //this.router.navigate(['pokemon']);
    //this.pokemonService.showPokemon(pokemon);
  }

}
