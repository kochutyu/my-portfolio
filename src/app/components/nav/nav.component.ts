import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  navigation: string[] = [
    'home',
    'work',
    'about',
    'blog',
    'services',
    'contact'
  ]

  constructor() { }

  ngOnInit() {
  }

}
