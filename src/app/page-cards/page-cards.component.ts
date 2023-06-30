import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonCards } from '../service';

@Component({
  selector: 'app-page-cards',
  templateUrl: './page-cards.component.html',
  styleUrls: ['./page-cards.component.scss']
})
export class PageCardsComponent implements OnInit {

  pokemonName: any;
  pokemonData: any;


  constructor(
    private route: ActivatedRoute,
    private pokemonCards: PokemonCards
  ) {}

  ngOnInit() {
    this.pokemonName = this.route.snapshot.paramMap.get('name');
    console.log(this.pokemonName);
  
   this.pokemonCards.getPokemons(this.pokemonName).subscribe(data => {
      this.pokemonData = data;

    });

  }

}
