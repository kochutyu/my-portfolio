import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  lol: number[] = [1,2,3,4,5,6,7]

  constructor() { }

  ngOnInit() {
  }

}
