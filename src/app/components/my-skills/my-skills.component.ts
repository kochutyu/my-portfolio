import { Component, OnInit } from '@angular/core';
import { IProgress } from 'src/app/shared/classes/i-progress';

@Component({
  selector: 'app-my-skills',
  templateUrl: './my-skills.component.html',
  styleUrls: ['./my-skills.component.scss']
})
export class MySkillsComponent implements OnInit {
  i: string = '50%'
  GETprogress: IProgress[] = [
    {
      subject: 'CSS',
      progress: 82
    },
    {
      subject: 'HTML',
      progress: 65
    },
    {
      subject: 'Angular',
      progress: 47
    },
    {
      subject: 'React',
      progress: 33
    },
    {
      subject: 'JQuery',
      progress: 25
    },
    {
      subject: 'Vue',
      progress: 29
    }
  ]
  progress: IProgress[] = [];
  constructor() {
    this.progress = this.GETprogress.sort((a, b) => b.progress - a.progress)
  }

  ngOnInit() {
  }

  good(progress): boolean {
    return progress > 80 && progress <= 100
  }

  well(progress): boolean {
    return progress > 60 && progress <= 80
  }

  soSo(progress): boolean {
    return progress > 45 && progress <= 60
  }

  notBad(progress): boolean {
    return progress > 30 && progress <= 45
  }

  bad(progress): boolean {
    return progress > 0 && progress <= 30
  }

}
