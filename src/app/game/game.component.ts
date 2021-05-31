import { Component, OnInit } from '@angular/core';
import { NewDeckService } from './new-deck.service';
import { Card } from './card';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
  providers: [NewDeckService],
  animations: [
    trigger('rotatedState', [
      state('default', style({ transform: 'rotate(0)' })),
      state('rotated', style({ transform: 'rotate(60deg)' })),
      transition('rotated => default', animate('2000ms ease-out')),
      transition('default => rotated', animate('2000ms ease-out')),
    ]),
  ],
})
export class GameComponent implements OnInit {
  constructor(private deck: NewDeckService) {}

  currentHitState = 'default';
  currentStandState = 'default';
  rotateHit(thisState: string): void {
    this.currentHitState = thisState;
  }
  rotateStand(thatState: string): void {
    this.currentStandState = thatState;
  }

  // rotate() {
  //   this.state = this.state === 'default' ? 'rotated' : 'default';
  // };

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
