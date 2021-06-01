import { Injectable } from '@angular/core';
import { Card } from './card';

@Injectable({
  providedIn: 'root',
})
export class NewDeckService {
  constructor() {}
  cards: Card[][] = [];

  public newDeck(): Card[][] {
    for (let i = 0; i < 4; i++) {
      this.cards[i] = [];
      for (let j = 0; j < 13; j++) {
        this.cards[i][j] = { id: j + 1, value: j + 1, colour: i, copiesLeft: 3, isAce: false };
      }
      this.cards[i][0].isAce = true;
      for (let j = 10; j < 13; j++) {
        this.cards[i][j].value = 10;
      }
    }
    console.log(this.cards);
    return this.cards;
  }
  drawACard(cards: Card[][]): Card {
    let card;
    // do {
    console.log('this is a feature, not a bug');
    const rndClr = this.random(4);
    const rndId = this.random(13);
    card = this.cards[rndClr][rndId];
    card.copiesLeft--;
    // } while (card.copiesLeft <= 0);
    return card;
  }
  public random(max: number): number {
    return Math.floor(Math.random() * max);
  }
}
