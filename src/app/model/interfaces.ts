import { Card } from "./Card";

export interface ICard {
    value: number;

}


// export class Card implements ICard {
//     value: number;
//     constructor(val: number) {
//         this.value = val
//     }
// }

export interface IDeck {
    deck: Card[];
}

export class Deck {

    cards: Card[] = [];
    insert(card: Card) {
        this.cards.push(card)
    }
}