import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})

export class DetailsComponent implements OnInit {
  detailStatus: boolean = true;
  detailLog = [];
  detailClicks: number = 0;

  constructor() { }

  ngOnInit() {
  }

  statusChange(){
    this.detailStatus = this.detailStatus ? false : true;
    this.detailClicks++;
    this.logDetails();
  }

  logDetails(){
    this.detailLog.push(["Clicked " + this.detailClicks + " times"]);
  }

  getColor(num){
    if(num >= 4){
      return "blue";
    }
  }

}