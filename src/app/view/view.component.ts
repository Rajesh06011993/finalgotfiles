import { Component, OnInit } from '@angular/core';

import {ActivatedRoute, Router} from '@angular/router'
import { GotService } from "../got.service";

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

 public data;

  constructor(private _route:ActivatedRoute, private router:Router, public gotService: GotService) {
   
    console.log("Constructor is called");

   }

  ngOnInit() {
    console.log("ngonit called");
    let elemUrl = this._route.snapshot.paramMap.get('url');
    console.log(elemUrl);

    this.data = this.gotService.getData(elemUrl).subscribe(
      data =>{
        this.data = data;
        console.log(this.data);
      },   
      error =>{
        console.log(error.errorMessage);
      }
   
    )

  }

}
