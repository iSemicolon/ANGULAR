import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() fromParent:string | undefined;

  fromParentPostMsg= "I am your parent Post";

  constructor() { }

  ngOnInit(): void {
  }

}
