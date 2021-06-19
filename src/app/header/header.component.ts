import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../services/firebase.service'
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  visibleLoginButton:boolean
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
  constructor(public firebaseService: FirebaseService) { 
    setInterval(() => {
      if (this.firebaseService.isLoggedIn) {
        this.visibleLoginButton =  false
      } else {
        this.visibleLoginButton =  true
      }
    }, 1000)
   }

  ngOnInit(): void {
    
  }

}
