import { Component, OnInit } from '@angular/core';
import { Card } from '../card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  isReversed: boolean;
  card: Card;
  constructor() {}

  ngOnInit(): void {}
}
