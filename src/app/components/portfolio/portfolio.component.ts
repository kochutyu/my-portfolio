import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  list: any[] = ['lol','Portfolio','Portfolio Portfolio Portfolio Portfolio Portfolio Portfolio Portfolio',4,5,6,7,8,9,10,11,12,13];

  constructor() { }

  ngOnInit() {
  }

}
