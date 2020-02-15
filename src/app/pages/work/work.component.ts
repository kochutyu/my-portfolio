import { Component, OnInit } from '@angular/core';
import { IProjectInfo } from 'src/app/shared/classes/i-project-info';
import { ITag } from 'src/app/shared/classes/i-tag';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

  projectInfo: IProjectInfo[] = [
    {
      img: '../../../assets/img/work/user.png',
      data: 'kochutyu',
    },
    {
      img: '../../../assets/img/work/like.png',
      data: '12',
    },
    {
      img: '../../../assets/img/work/date.png',
      data: '13.02.2020',
    },
    {
      img: '../../../assets/img/work/coments.png',
      data: '4',
    }
  ]

  slider: string[] = [
    'https://picsum.photos/200',
    'https://picsum.photos/201',
    'https://picsum.photos/202',
    'https://picsum.photos/203'
  ]

  tags: ITag[] = [
    {content:'Angular'},
    {content:'CSS'},
    {content:'JavaScript'},
    {content:'JQuery'},
    {content:'Angular'},
    {content:'CSS'},
    {content:'JavaScript'},
    {content:'JQuery'},
    {content:'Angular'},
    {content:'CSS'},
    {content:'JavaScript'},
    {content:'JQuery'},
  ]
  
  constructor() { }

  ngOnInit() {
  }

}
