import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import { Observable } from 'rxjs';
import firebase from 'firebase/app';
import 'firebase/auth'

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  userData: Observable<firebase.User>;
  readonly authState$: Observable<firebase.User | null> = this.firebaseAuth.authState;
  isLoggedIn = false
  constructor(private firebaseAuth: AngularFireAuth) { 
    this.userData = firebaseAuth.authState;
  }

  //login
  login(email: string, password: string) {
    this.firebaseAuth
    .signInWithEmailAndPassword(email, password)
    .then(res => {
      console.log('You are Successfully logged in!', res);
      this.isLoggedIn = true
      return this.isLoggedIn
    })
    .catch(error => {
      console.log('Something is wrong:', error.message);
    })
  }
  //register
  register(email: string, password: string) {
    this.firebaseAuth
    .createUserWithEmailAndPassword(email, password)
    .then(res => {
      console.log('You are Successfully signed up!', res);
      this.isLoggedIn = true
      return this.isLoggedIn
    })
    .catch(error => {
      console.log('Something is wrong:', error.message);
    })
  }
  //logout
  logout() {
    this.firebaseAuth
    .signOut()
    console.log('You are Successfully logged out!');
    this.isLoggedIn = false
    return this.isLoggedIn
  }
}
