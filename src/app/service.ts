import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { of } from 'rxjs';




@Injectable({
    providedIn:'root',
})
export class PokemonList {
    private url: string = "https://api-pokemon-fr.vercel.app/api/v1/pokemon"
  
    constructor(private http: HttpClient) { }
  
    getPokemons(): Observable<any> {
      return this.http.get(this.url);
    }
}


@Injectable({
    providedIn:'root',
})
export class PokemonCards {
  private url: string = "https://api.tcgdex.net/v2/fr/cards";
  private cache: any[] | null = null;

  constructor(private http: HttpClient) { }
  
  getPokemons(pokemonName:any): Observable<any> {
    if (this.cache) {
      return of(this.filterCards(pokemonName));
    } else {
      return this.http.get<any[]>(this.url).pipe(
        map((cards: any[]) => {
          this.cache = cards;
          return this.filterCards(pokemonName);
        })
      );
    }
  }

  private filterCards(pokemonName:any): any[] {
    if (this.cache) {
      return this.cache.filter(card => card.name === pokemonName);
    } else {
      return [];
    }
  }
}
