import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Observable } from "rxjs/Observable";
import { forkJoin } from "rxjs/observable/forkJoin";

@Injectable()
export class GotService {

  private books_url = "https://www.anapioficeandfire.com/api/books";
  private house_url = "https://www.anapioficeandfire.com/api/houses";
  private character_url = "https://www.anapioficeandfire.com/api/characters";


  constructor(private _http: HttpClient) {

    console.log("constructor called");

  }

  public getBooks() {

    return (this._http.get(this.books_url));
  }

  public getHouses() {

    return (this._http.get(this.house_url));

  }

  public getCharacters() {

    return (this._http.get(this.character_url));

  }

  public getData(url){

    return(this._http.get(url));
  }


}


