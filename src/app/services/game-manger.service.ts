import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from '../model/Card';
import { Deck, IDeck } from '../model/interfaces';

@Injectable({
  providedIn: 'root'
})
export class GameMangerService {

  user = { name: 'joa amar', is: 1 };
  deck = new Deck();
  users: any[] = [];

  constructor() { }


  createDeck(): void {
    for (let i = 0;i < 5;i++) {
      this.deck.insert(new Card(i + 1, 350, 20, 's'))
    }

  }



  shuffle() {
    let cards = this.deck.cards
    let currentIndex = cards.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [cards[currentIndex], cards[randomIndex]] = [cards[randomIndex], cards[currentIndex]];
    }

    //  return array;
  }

  order() {
    let cards = this.deck.cards;
    cards.sort(this.compareOrder);

  }

  compareOrder(a: Card, b: Card) {
    if (a.id < b.id) {
      return -1;
    }
    if (a.id > b.id) {
      return 1;
    }
    return 0;
    //  return a.id != b.id && a.zIndex > b.zIndex ? 1 : 0;
  }

  begin(): Observable<any> {
    return new Observable<any>((observer) => {
      this.insertUser();
      observer.next(true);
    })

  }
  join(user: any) {
    this.users.push(user)
  }
  insertUser() {
    this.users.push(this.user)
  }

}
