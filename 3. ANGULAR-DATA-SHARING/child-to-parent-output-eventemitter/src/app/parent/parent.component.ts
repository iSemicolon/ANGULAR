import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  childData: string | undefined ;

  receiveChildMsg (msg: string ){

    this.childData=msg;
    console.log("hello");
  }

  constructor() { }

  ngOnInit(): void {

  }

}
