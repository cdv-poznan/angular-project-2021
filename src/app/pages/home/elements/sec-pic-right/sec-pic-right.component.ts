import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sec-pic-right',
  templateUrl: './sec-pic-right.component.html',
  styleUrls: ['./sec-pic-right.component.scss']
})
export class SecPicRightComponent implements OnInit {
  @Input() photoUrl: string;
  @Input() rightContainerText: string;
  @Input() rightContainerHeader: string;

  constructor() { }

  ngOnInit(): void {
  }

}
