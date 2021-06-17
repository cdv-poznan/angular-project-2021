import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

interface Activity {
  value: number;
  viewValue: string;
}

interface Goal {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'app-calories-form',
  templateUrl: './calories-form.component.html',
  styleUrls: ['./calories-form.component.scss']
})
export class CaloriesFormComponent implements OnInit {
//   age: number;
//   weight: number;
//   height: number;
//   usersActivity: string;
//   bmrValue: number;
//   caloriesValue: number;
//   activities: Activity[] = [
//     {value: 1.2, viewValue: 'Little to no excercises'},
//     {value: 1.375, viewValue: 'Light exercise (once a week)'},
//     {value: 1.55, viewValue: 'Moderate exercise (twice a week)'},
//     {value: 1.725, viewValue: 'Heavy exercise (3–5 days per week)'},
//     {value: 1.9, viewValue: 'Very heavy exercise (more than 5 days a week)'},
//   ];
//   usersGoal: string;
//   goals: Goal[] = [
//     {value: 500, viewValue: 'Lose weight'},
//     {value: 0, viewValue: 'Maintain weight'},
//     {value: -500, viewValue: 'Lose weight'}
//   ];
//   genders: string[] = ['male', 'female'];
//   usersGender: string;
//   constructor() { }

  ngOnInit(): void {
}
//   bmr = function() {
//       let bmrVal = this.weight * 10 + this.height * 6.25 + this.age * 5;
//       if(this.usersGender === 'male') {
//         return bmrVal + 5;
//       } else if (this.usersGender === 'female') {
//         return bmrVal - 161;
//       }
//       this.bmrValue = bmrVal;
//       return this.bmrValue;
//     }
//   cals = function(bmrValue) {
//     if(bmrValue !== NaN && this.usersActivity.value !== null && this.usersGoal !== null) {
//       let caloriesValue = bmrValue * this.usersActivity.value - this.usersGoal.value;
//       console.log(caloriesValue)
//       return caloriesValue
//     } else {
//       return;
//     }
//   }
//   proteinAmount = function(caloriesValue){
//     if(caloriesValue !== NaN) {
//       return  caloriesValue * .55
//     } else {
//       return;
//     }
//   }
//   carbsAmount = function(caloriesValue){
//     if(caloriesValue !== NaN) {
//       return caloriesValue * .25
//     } else {
//       return;
//     }
//   }
//   fatAmount = function(caloriesValue){
//     if(caloriesValue !== NaN) {
//       return caloriesValue * .2
//     } else {
//       return;
//     }
//   }
  form: FormGroup = new FormGroup({
    age: new FormControl('', Validators.required),
    weight: new FormControl('', Validators.required),
    height: new FormControl('', Validators.required),
    gender: new FormControl('1', Validators.required),
    goals: new FormControl(0, Validators.required),
    activities: new FormControl(0, Validators.required),
  });

  initializeFormGroup() {
    this.form.setValue({
      age: '',
      weight: '',
      height: '',
      gender: '1',
      goals: 0,
      activities: 0,
    });
  }

  goals = [
    {value: 500, viewValue: 'Lose weight'},
    {value: 0, viewValue: 'Maintain weight'},
    {value: -500, viewValue: 'Gain weight'}
  ];

  activities = [
    {value: 1.2, viewValue: 'Little to no excercises'},
    {value: 1.375, viewValue: 'Light exercise (once a week)'},
    {value: 1.55, viewValue: 'Moderate exercise (twice a week)'},
    {value: 1.725, viewValue: 'Heavy exercise (3–5 days per week)'},
    {value: 1.9, viewValue: 'Very heavy exercise (more than 5 days a week)'},
  ];

  calculatedValues = {
    bmrVal: 0,
    caloriesValue: 0,
    proteinValue: 0,
    carbsValue: 0,
    fatValue: 0,
    isCalculated: false
  }

  chartData = [
    {name: "Protein", value: 0},
    {name: "Carbs", value: 0},
    {name: "Fat", value: 0}
  ] 

  onClear() {
    this.form.reset();
    this.initializeFormGroup();
    this.calculatedValues = {
      bmrVal: 0,
      caloriesValue: 0,
      proteinValue: 0,
      carbsValue: 0,
      fatValue: 0,
      isCalculated: false
    }
  }

  onClick() {
    this.calculatedValues.bmrVal = Math.floor(this.form.value.weight * 10 + this.form.value.height * 6.25 + this.form.value.age * 5);
    if(this.form.value.gender === '1') {
      this.calculatedValues.bmrVal = this.calculatedValues.bmrVal + 5;
    } else if (this.form.value.gender === '2') {
      this.calculatedValues.bmrVal =  this.calculatedValues.bmrVal - 161;
    }
    this.calculatedValues.caloriesValue = Math.floor(this.calculatedValues.bmrVal * this.form.value.activities - this.form.value.goals);
    this.calculatedValues.proteinValue = Math.floor(this.calculatedValues.caloriesValue * .55);
    this.calculatedValues.carbsValue = Math.floor(this.calculatedValues.caloriesValue * .25);
    this.calculatedValues.fatValue = Math.floor(this.calculatedValues.caloriesValue * .2);
    this.calculatedValues.isCalculated = true;
    //this assigns value to chart data
    this.chartData[0].value = this.calculatedValues.proteinValue;
    this.chartData[1].value = this.calculatedValues.carbsValue;
    this.chartData[2].value = this.calculatedValues.fatValue;
    return this.calculatedValues;
  }
}