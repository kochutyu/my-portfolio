import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ul-li-done',
  templateUrl: './ul-li-done.component.html',
  styleUrls: ['./ul-li-done.component.scss']
})
export class UlLiDoneComponent implements OnInit {
  ulLiDone: any[] = ['Angular', 'CSS', 'HTML', 'JS']
  constructor() { }

  ngOnInit() {
  }

}
