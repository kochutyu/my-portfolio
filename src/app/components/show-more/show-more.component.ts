import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-more',
  templateUrl: './show-more.component.html',
  styleUrls: ['./show-more.component.scss']
})
export class ShowMoreComponent implements OnInit {
  list: any[] = ['lol','Portfolio','Portfolio',1,2,3,4];

  constructor() { }

  ngOnInit() {
  }

}
