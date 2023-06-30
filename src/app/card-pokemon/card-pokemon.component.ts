import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-pokemon',
  templateUrl: './card-pokemon.component.html',
  styleUrls: ['./card-pokemon.component.scss']
})
export class CardPokemonComponent {

  @Input() pokemon:any;
  constructor(private router: Router){}

  goToCard(pokemon:any){
    console.log("ici")
    this.router.navigate(['/detail',pokemon.name.fr])
  }

}
