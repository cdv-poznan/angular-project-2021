import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-section',
  templateUrl: './form-section.component.html',
  styleUrls: ['./form-section.component.scss']
})
export class FormSectionComponent implements OnInit {
  name: string;
  email: string;
  age: number;
  weight: number;
  goal: string;
  message: string;
  constructor() { }

  ngOnInit(): void {
  }

  sendForm() {
    console.log('hi')
  }

}
