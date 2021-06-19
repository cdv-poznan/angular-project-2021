import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Element } from '../../shop-element';

@Component({
  selector: 'app-shop-element',
  templateUrl: './shop-element.component.html',
  styleUrls: ['./shop-element.component.scss']
})
export class ShopElementComponent implements OnInit {
  @Input() element: Element;
  @Output() edit = new EventEmitter<Element>();
  constructor() { }

  ngOnInit(): void {
  }

}
