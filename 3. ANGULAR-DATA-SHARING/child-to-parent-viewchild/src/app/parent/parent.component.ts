import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit, AfterViewInit{

  @ViewChild(ChildComponent) childrens: ChildComponent | undefined ;

  childMsg: string | undefined;

  constructor() { }

  ngAfterViewInit(): void {
    this.childMsg=this.childrens?.fromChild;

  }

  ngOnInit(): void {

  }



}
