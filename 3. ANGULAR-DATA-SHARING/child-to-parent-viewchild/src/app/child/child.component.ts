import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  fromChild="hi dad, i am your good son";

  constructor() { }

  ngOnInit(): void {
  }

}
