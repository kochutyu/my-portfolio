import { Component, OnInit, Input } from '@angular/core';
import { ITag } from 'src/app/shared/classes/i-tag';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent implements OnInit {
  @Input() tags: ITag[];

  constructor() { }

  ngOnInit() {
  }

}
