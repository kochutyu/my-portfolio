import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-contact',
  templateUrl: './info-contact.component.html',
  styleUrls: ['./info-contact.component.scss']
})
export class InfoContactComponent implements OnInit {
  hover: boolean;
  constructor() { }

  ngOnInit() {
    if(this.hover) alert('llol')
  }
}
