import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-lists',
  templateUrl: './post-lists.component.html',
  styleUrls: ['./post-lists.component.css']
})
export class PostListsComponent implements OnInit {

  @Input()fromPost:string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
