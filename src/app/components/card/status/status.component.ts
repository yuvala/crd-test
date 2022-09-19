import { Component, OnInit } from '@angular/core';
import { GameMangerService } from 'src/app/services/game-manger.service';

@Component({
  selector: 'status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})

export class StatusComponent implements OnInit {
  get users() { return this.gameManager.users }
  get deck() { return this.gameManager.deck }
  get cards() { return this.deck.cards }

  constructor(private gameManager: GameMangerService) { }

  ngOnInit(): void {
  }

}
