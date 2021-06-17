import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  links = [
    {
      name: "Home",
      route: ""
    },
    {
      name: "Calories calculator",
      route: "/calculator"
    },
    {
      name: "List",
      route: "/list"
    }
  ];
  activeLink = this.links[0];

  constructor() { }

  ngOnInit(): void {
  }

}
