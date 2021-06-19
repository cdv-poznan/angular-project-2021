import { Component, OnInit, Output } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {
  constructor(public firebaseService: FirebaseService, private router: Router ){}
  isLoggedIn = true
  ngOnInit(): void {
  }

  onLogout() {
    this.firebaseService.logout()
    this.isLoggedIn = true;
    this.router.navigate(['/'])
  }

  onBack() {
    this.router.navigate(['/'])
  }
}
