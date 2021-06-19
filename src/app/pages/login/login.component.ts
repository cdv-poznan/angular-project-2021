import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  isLoggedIn = false
  constructor(public firebaseService: FirebaseService, private router: Router ){}
  ngOnInit(): void {
    if(localStorage.getItem('user') !== null) {
      this.isLoggedIn = true
    } else {
      this.isLoggedIn = false
    }
  }
  async onLogin() {
    await this.firebaseService.login(this.email, this.password)
    if(this.firebaseService.isLoggedIn) {
      this.isLoggedIn = true;
    }
    this.router.navigate(['/'])
  }

}
