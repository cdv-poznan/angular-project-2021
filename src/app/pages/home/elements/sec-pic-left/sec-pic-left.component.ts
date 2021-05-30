import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sec-pic-left',
  templateUrl: './sec-pic-left.component.html',
  styleUrls: ['./sec-pic-left.component.scss']
})
export class SecPicLeftComponent implements OnInit {
  @Input() photoUrl: string;
  @Input() leftContainerText: string;
  @Input() leftContainerHeader: string;

  constructor() { }

  ngOnInit(): void {
  }

}
