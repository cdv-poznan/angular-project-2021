import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-columns',
  templateUrl: './columns.component.html',
  styleUrls: ['./columns.component.scss']
})
export class ColumnsComponent implements OnInit {
  breakpoint: number;
  gutter: string;
  constructor() { }

  ngOnInit(): void {
    this.breakpoint = (window.innerWidth <= 1000) ? 1 : 3;
    this.gutter = (window.innerWidth <= 1000) ? "0px" : "30px";
  }
  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 1000) ? 1 : 3;
    this.gutter = (window.innerWidth <= 1000) ? "0px" : "30px";
  }
}
