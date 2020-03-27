import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contact_textarea: string = '';
  constructor() { }

  ngOnInit() {
  }

  contactClear(): void{
    this.contact_textarea = '';
  }

}
