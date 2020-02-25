import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-show-more',
  templateUrl: './show-more.component.html',
  styleUrls: ['./show-more.component.scss']
})
export class ShowMoreComponent implements OnInit, AfterViewInit {
  // all_list: any[] = ['lol','Portfolio','Portfolio',1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8];
  all_list: any[] = [
    'https://picsum.photos/101',
    'https://picsum.photos/102',
    'https://picsum.photos/103',
    'https://picsum.photos/104',
    'https://picsum.photos/105',
    'https://picsum.photos/106',
    'https://picsum.photos/107',
    'https://picsum.photos/108',
    'https://picsum.photos/109',
    'https://picsum.photos/110',
    'https://picsum.photos/111',
    'https://picsum.photos/112',
    'https://picsum.photos/113',
    'https://picsum.photos/114',
  ];
  list: any[] = [];
  max_add_list: number = 6;
  min_add_list: number = 3;
  btn_status: string = 'Show more'

  constructor() { }

  ngOnInit() {
    this.list = this.all_list.slice(0, 3)
  }
  
  ngAfterViewInit(){
  }

  getRandomDiapasoneNumber(): number{
    return Math.ceil(this.min_add_list+Math.random()*(this.max_add_list-this.min_add_list))
  }

  showMmore(): void{
    const random_number = this.getRandomDiapasoneNumber();
    if (this.list.length<this.all_list.length && this.list.length+random_number<=this.all_list.length) {
      this.list = this.all_list.slice(0, this.list.length + random_number);
    } else {
      this.list = this.all_list;
      this.btn_status = 'No more works!';
    }
  }

}
