import { Component, OnInit } from '@angular/core';
import { PokemonList } from '../service';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.scss']
})
export class PageHomeComponent implements OnInit {
  data:any =[]

  constructor(private pokemonList: PokemonList){}


  ngOnInit(): void {
    this.pokemonList.getPokemons().subscribe(data => {
      this.data = data
    })
  }
}
