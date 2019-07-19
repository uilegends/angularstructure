import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  choice = 1;
  a = 12;
  myArr = [3, 7, 8, 9];
  num = [7, 8, 9];
  demo: any;
  constructor() { }

  ngOnInit() {
    this.a = 111;
    this.isNum();
    console.log(this.a);


  }
  //const b = 2222;
  isNum() {
    //var a = 11;
    //console.log(10);
    for (var i = 1; i <= 4; i++) {
      console.log(i);
    }
    console.log(i, 'ghghg');

  }

  setChoice(choice: number) {
    this.choice = choice;
  }



}
