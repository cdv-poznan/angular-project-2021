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
  constructor(private deck: NewDeckService) {}

  ngOnInit(): void {
    const cards = this.deck.newDeck();
    const dealersHand: Card[] = [];
    const playersHand: Card[] = [];
    dealersHand[0] = this.deck.drawACard(cards);
    playersHand[0] = this.deck.drawACard(cards);
    playersHand[1] = this.deck.drawACard(cards);
  }
  public sum(array: Array<Card>): number {
    let sum = 0;
    for (const element of array) {
      sum = sum + element.value;
    }
    return sum;
  }
}
