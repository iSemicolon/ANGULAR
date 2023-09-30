import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Output() childMsg:EventEmitter<string> = new EventEmitter<string>();

 fromChild: string="Hey dad, i am your good son";
  childSendData():void{

    this.childMsg.emit(this.fromChild);

  }
  constructor() { }

  ngOnInit(): void {
  }

}
