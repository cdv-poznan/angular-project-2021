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
  constructor(public deck: NewDeckService) {}

  ngOnInit(): void {
    const cards = this.deck.newDeck();
    const dealersCard1 = this.deck.drawACard(cards);
    this.dealersHand[0] = dealersCard1;
    this.playersHand[0] = this.deck.drawACard(cards);
    this.playersHand[1] = this.deck.drawACard(cards);
  }
  public sum(array: Array<Card>): number {
    let sum = 0;
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < array.length; i++) {
      sum += array[i].value;
    }

    return sum;
  }
}
