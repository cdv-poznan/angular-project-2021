import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-hit-button',
  templateUrl: './hit-button.component.html',
  styleUrls: ['./hit-button.component.scss'],
  animations: [
    trigger('rotatedState', [
      state('default', style({ transform: 'rotate(0)' })),
      state('rotated', style({ transform: 'rotate(60deg)' })),
      transition('rotated => default', animate('2000ms ease-out')),
      transition('default => rotated', animate('2000ms ease-out')),
    ]),
  ],
})
export class HitButtonComponent implements OnInit {
  constructor() {}
  currentState = 'default';
  rotate(thisState: string): void {
    this.currentState = thisState;
  }

  ngOnInit(): void {}
}
