import { Injectable } from '@angular/core';
import { Card } from './card';

@Injectable()
export class NewDeckService {
  constructor() {}

  newDeck(): Card[][] {
    const cards: Card[][] = [];
    for (let i = 0; i < 4; i++) {
      cards[i] = [];
      for (let j = 0; j < 13; j++) {
        cards[i][j] = { id: j + 1, value: j + 1, colour: i, copiesLeft: 3, isAce: false };
      }
      cards[i][0].isAce = true;
      for (let j = 10; j < 13; j++) {
        cards[i][j].value = 10;
      }
    }
    return cards;
  }
  drawACard(cards: Card[][]): Card {
    let card;
    do {
      const rndClr = this.random(4);
      const rndId = this.random(13);
      card = cards[rndClr][rndId];
      card.copiesLeft--;
    } while (card.copiesLeft <= 0);
    return card;
  }
  public random(max: number): number {
    return Math.floor(Math.random() * max);
  }
}
