import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
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
  async onRegister() {
    if(!this.email || !this.password) {
      alert('Please add data');
      return;
    } else if (this.password.length < 6) {
      alert('Password should have at least 6 characters');
      return;
    }
    await this.firebaseService.register(this.email, this.password)
    if(this.firebaseService.isLoggedIn) {
      this.isLoggedIn = true;
      this.router.navigate(['/'])
    }
  }
}
