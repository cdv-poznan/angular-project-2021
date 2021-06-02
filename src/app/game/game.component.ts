import { Component, OnDestroy, OnInit } from '@angular/core';
import { NewDeckService } from './new-deck.service';
import { Card } from './card';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
  providers: [NewDeckService],
})
export class GameComponent implements OnInit, OnDestroy {
  naviSub;

  cards: Card[][];
  dealersHand: Card[] = [];
  playersHand: Card[] = [];
  playerCounter: number;
  dealerCounter: number;
  constructor(public deck: NewDeckService, private dialog: MatDialog, private router: Router) {
    this.naviSub = this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) {
        this.initialiseInvites();
      }
    });
  }

  ngOnInit(): void {
    const cards = this.deck.newDeck();
    this.dealersHand[0] = this.deck.drawACard(cards);
    this.dealerCounter = 1;
    this.playersHand[0] = this.deck.drawACard(cards);
    this.playersHand[1] = this.deck.drawACard(cards);
    this.playerCounter = 2;
    if (this.sum(this.playersHand) === 21) {
      this.dealersHand[1] = this.deck.drawACard(cards);
      this.sum(this.dealersHand) === 21 ? console.log(this.openDialog('Draw!')) : console.log(this.openDialog('Blackjack! You win!'));
    }
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
    const total = this.sum(this.playersHand);
    console.log(total);
    if (this.playersHand.length === 5 && total < 22) {
      this.openDialog('Five Card Charlie! You win!');
    }
    if (total > 21) {
      console.log('You have just lost the game');
      this.openDialog('Bust! You lose!');
    }
  }
  public playerStands() {
    while (this.sum(this.dealersHand) < 17) {
      this.dealersHand[this.dealerCounter] = this.deck.drawACard(this.cards);
      this.dealerCounter++;
    }
    if (this.sum(this.dealersHand) > 21) {
      console.log('Winner, winner, chicken dinner');
      return this.openDialog('Dealer busts! You win!');
    } else if (this.sum(this.dealersHand) < this.sum(this.playersHand)) {
      console.log('You win!');
      return this.openDialog('Your hand is higher - you win!');
    } else {
      console.log('You lose!');
      return this.openDialog(`Dealer's hand is higher - you lose!`);
    }
  }
  public openDialog(message: string) {
    this.dialog.open(DialogComponent, { data: message, disableClose: true, position: { left: '20', bottom: '20' } });
  }

  private initialiseInvites() {
    this.dealersHand = [];
    this.playersHand = [];
    this.playerCounter = 0;
    this.dealerCounter = 0;
    this.ngOnInit();
  }
  ngOnDestroy() {
    if (this.naviSub) {
      this.naviSub.unsubscribe();
    }
  }
}
