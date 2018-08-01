import { Component, OnInit } from '@angular/core';
import { GotService } from "../got.service";

import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public data;
  public houses;
  public books;
  public characters;
  public allData;
  public dropDowns = ["books", "characters", "houses", "all"];
  public selectedDropdown;


  constructor(public gotService: GotService) {

  }

  ngOnInit() {

    this.houses = this.gotService.getHouses().subscribe(
      data3 => {
        this.houses = data3;

        this.books = this.gotService.getBooks().subscribe(

          data => {
            this.books = data;

            this.characters = this.gotService.getCharacters().subscribe(
              data => {
                this.characters = data;

                this.allData = this.characters.concat(this.books);
                this.allData = this.allData.concat(this.houses);

                console.log(this.allData);
                console.log(this.allData.length);

                for (var element = 0; element < this.allData.length; element++) {

                  for (var inner = element + 1; inner < this.allData.length; inner++) {

                    if (this.allData[element]["name"].toUpperCase() > this.allData[inner]["name"].toUpperCase()) {
                      let swap;
                      swap = this.allData[element];

                      this.allData[element] = this.allData[inner];
                      this.allData[inner] = swap;
                    } else continue;
                  }
                }

                console.log(this.allData);

              },
              error => {
                console.log(error.errorMessage)
              }
            )
          },
          error => {
            console.log(error.errorMessage)
          }

        )

      },
      error => {
        console.log(error.errorMessage)
      }
    )
  }

  public setting() {

    this.selectedDropdown = null;

  }

}
