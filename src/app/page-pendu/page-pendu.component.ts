import { Component, OnInit, OnChanges, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { PokemonList } from '../service';
import * as confetti from 'canvas-confetti';



@Component({
  selector: 'app-page-pendu',
  templateUrl: './page-pendu.component.html',
  styleUrls: ['./page-pendu.component.scss']
})
export class PagePenduComponent implements OnInit {
  @ViewChild('canvas', { static: false }) canvas: ElementRef<HTMLCanvasElement> | undefined;

  data:any =[]
  randonValue:number = 0
  randomPick:any =""
  inputValue: any;
  inputPokemonName:any;
  score:number = 10
  randomPickArray:any
  randomPickArrayUnique:any
  inputArray:any = []
  penduBadInput:number = 0
  scoreTotal:number = 0




  constructor(private pokemonList: PokemonList){}
  onlyUnique(value:any, index:any, array:any) {
    return array.indexOf(value) === index;
  }

  ngOnInit(): void {
    this.pokemonList.getPokemons().subscribe(data => {
      this.data = data
      console.log(this.data)
      this.randonValue = Math.floor(Math.random() * 151)
      this.randomPick = this.data[this.randonValue]
      this.randomPickArray = Array.from(this.randomPick.name.fr.toLowerCase())
      this.randomPickArrayUnique = this.randomPickArray.filter(this.onlyUnique)
      console.log(this.randomPickArray)
    })
  }
  newOne(){
    this.randonValue = Math.floor(Math.random() * 151)
      this.randomPick = this.data[this.randonValue]
      this.randomPickArray = Array.from(this.randomPick.name.fr.toLowerCase())
      this.randomPickArrayUnique = this.randomPickArray.filter(this.onlyUnique)
      this.inputArray = []
      this.penduBadInput = 0
      this.score = 10
  }

  checkValue(){
    if(this.inputPokemonName.toLowerCase() === this.randomPick.name.fr.toLowerCase()){
      console.log("bravo")
      this.newOne()
    } else{
      console.log("Looser")
    }
  }

  onClickButton() {
    // La logique pour créer une explosion de confettis après que la vue du composant a été initialisée
  if (this.canvas && this.canvas.nativeElement) {
    const confettiWithoutWorker = confetti.create(this.canvas.nativeElement, { useWorker: false, resize: true });
    confettiWithoutWorker({ particleCount: 100, spread: 360, startVelocity: 20, gravity: 0.8 });
  }
}

  pickLetter(){
    if(!this.inputArray.includes(this.inputValue)){
      if (this.randomPickArray.includes(this.inputValue)) {
        this.inputArray.push(this.inputValue);
        console.log(this.inputArray)
        this.inputValue = '';

        if(this.randomPickArrayUnique.length == this.inputArray.length){
          console.log("ici")
          this.onClickButton()
          this.scoreTotal = this.scoreTotal + this.score
          setTimeout(() => this.newOne(), 4000)
        }
          } else{
            this.inputValue = ''
        this.score --
        if(this.score == 0){
          this.newOne()
          this.score = 10
        }
      }
    }else{
      this.inputValue = ''
    }
  }
}


