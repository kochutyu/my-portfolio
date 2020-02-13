import { Component, OnInit, Input } from '@angular/core';
import { IProjectInfo } from 'src/app/shared/classes/i-project-info';

@Component({
  selector: 'app-project-info',
  templateUrl: './project-info.component.html',
  styleUrls: ['./project-info.component.scss']
})
export class ProjectInfoComponent implements OnInit {
  @Input() item: IProjectInfo

  constructor() { }

  ngOnInit() {
  }

}
