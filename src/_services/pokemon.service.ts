import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import 'rxjs/Rx';

@Injectable()
export class PokemonService {

    private showPokemonSource = new Subject <string>();
    showPokemon$ = this.showPokemonSource.asObservable();


    constructor(private http: Http) { }

    getPokemones(): Observable<any> {

        return this.http.get( environment.apiUrl + '/pokedex/2')
            .map((response: Response) => {
                return response.json()
            });

    }

    showPokemon(pokemon: any) {
        this.showPokemonSource.next(pokemon);
    }

}
