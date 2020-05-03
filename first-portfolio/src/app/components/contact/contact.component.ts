import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contact_textarea: string = '';
  form: FormGroup;
  submited: boolean;
  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      text: new FormControl(null, Validators.required),
    });
  }

  contactClear(): void{
    this.contact_textarea = '';
  }

  sendMessage(): void{
    this.submited = true;
    const url = 'https://us-central1-portfolio-d9ab9.cloudfunctions.net/sendMail';
    this.http.post(url, null, {
      params: {
        name: this.form.value.name,
        email: this.form.value.email,
        text: this.form.value.text,
      }
    }).subscribe(res => {
      console.log(res);
      this.submited = false;
      this.form.reset();
    }, error => {
      this.form.reset();
      this.submited = false;
    });
  }

}
