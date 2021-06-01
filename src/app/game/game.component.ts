import { Component, OnInit } from '@angular/core';
import { NewDeckService } from './new-deck.service';
import { Card } from './card';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
  providers: [NewDeckService],
})
export class GameComponent implements OnInit {
  cards: Card[][];
  dealersHand: Card[] = [];
  playersHand: Card[] = [];
  playerCounter: number;
  dealerCounter: number;
  constructor(public deck: NewDeckService) {}

  ngOnInit(): void {
    const cards = this.deck.newDeck();
    this.dealersHand[0] = this.deck.drawACard(cards);
    this.dealerCounter = 1;
    this.playersHand[0] = this.deck.drawACard(cards);
    this.playersHand[1] = this.deck.drawACard(cards);
    this.playerCounter = 2;
  }
  public sum(array: Array<Card>): number {
    let sum = 0;
    let aceCounter = 0;
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < array.length; i++) {
      sum += array[i].value;
      if (array[i].isAce && sum < 12 && aceCounter === 0) {
        aceCounter++;
        sum += 10;
      }
    }
    if (aceCounter === 1 && sum > 21) {
      sum -= 10;
    }
    return sum;
  }
  public playerHits() {
    this.playersHand[this.playerCounter] = this.deck.drawACard(this.cards);
    console.log(this.playerCounter++);
  }
  public playerStands() {
    while (this.sum(this.dealersHand) < 17) {
      console.log((this.dealersHand[this.dealerCounter] = this.deck.drawACard(this.cards)));
      this.dealerCounter++;
    }
  }
}
