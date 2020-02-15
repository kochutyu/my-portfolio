import { Component, OnInit } from '@angular/core';
import { ITag } from 'src/app/shared/classes/i-tag';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  slider: string[] = [
    'https://picsum.photos/100',
    'https://picsum.photos/200',
    'https://picsum.photos/300',
  ]

  tags: ITag[] = [
    {content:'CSS'},
    {content:'HTML'},
    {content:'JQuery'},
    {content:'Angular'},
  ]

  constructor() { }

  ngOnInit() {
  }

}
