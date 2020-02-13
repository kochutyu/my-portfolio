import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  lol: number[] = [1, 2, 3, 4, 5, 6, 7]
  img: string[] = [
    'https://numl.org/.379211',
    'https://numl.org/.089211',
    'https://numl.org/.789211'
  ]
  iSelect: number = 0;

  constructor() { }

  @ViewChild('nextSlide', { static: false }) nextSlide: ElementRef;

  ngOnInit() {
    this.OnNextSlide();
  }


  checkNextSlide: boolean = false;
  OnNextSlide(): void {
    let clear = setInterval(() => {
      if (!this.checkNextSlide) {
        if (this.nextSlide.nativeElement.childNodes[0]) {
          if (this.iSelect === 0 || this.iSelect < this.img.length - 1) this.iSelect += 1;
          else this.iSelect = 0;
          // this.nextSlide.nativeElement.childNodes[this.iSelect + 1].childNodes[0].click();
        } else {
          if (this.iSelect === 0 || this.iSelect < this.img.length - 1) this.iSelect += 1;
          else this.iSelect = 0;
        }
      } else {
        this.checkNextSlide = false;
        clearInterval(clear);
        this.OnNextSlide();
      }
    }, 4000);
  }
  thisItem(item): void {
    this.iSelect = item;
    this.checkNextSlide = true;
  }

}
