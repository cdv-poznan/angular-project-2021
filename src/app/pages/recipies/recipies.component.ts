import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-recipies',
  templateUrl: './recipies.component.html',
  styleUrls: ['./recipies.component.scss']
})
export class RecipiesComponent implements OnInit {
  constructor() { }
  recipiesResponse;
  recipiesArray = [];
  ngOnInit() {
    fetch("https://yummly2.p.rapidapi.com/feeds/list?start=0&limit=20&tag=list.recipe.popular", {
    "method": "GET",
    "headers": {
      "x-rapidapi-key": "85de82d9bfmshf8bf878e3250409p1f6b95jsn7d50396b7e6c",
      "x-rapidapi-host": "yummly2.p.rapidapi.com"
    }
    })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Błąd sieci");
      }
    })
    .then((data) => {
      this.recipiesResponse = data.feed;
      for(let i=0; i<this.recipiesResponse.length; i++) {
        let dataObject = {};
        dataObject['displayName'] = this.recipiesResponse[i].display.displayName;
        if(this.recipiesResponse[i].display.images === undefined || this.recipiesResponse[i].display.images === null) {
          continue;
        } else {
          dataObject['imageSrc'] = this.recipiesResponse[i].display.images[0];
        }
        if(this.recipiesResponse[i].content.description === null) {
          continue;
        } else {
          dataObject['content'] = this.recipiesResponse[i].content.description.text;
        }
        this.recipiesArray.push(dataObject)
      }
      return this.recipiesArray
    })
    .catch(err => {
      console.error(err);
    });
  }

}
