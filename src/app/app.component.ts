import { Component, ElementRef, ViewChild } from '@angular/core';
import { Deck } from './model/interfaces';
import { GameMangerService } from './services/game-manger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'crd-test';
  
  get deck() { return this.gameManger.deck };

  constructor(public gameManger: GameMangerService) {
    this.gameManger.createDeck()

  }
  ngOnInit():void{
    
  }
}
