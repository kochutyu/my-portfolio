import { Component, ViewEncapsulation, OnInit, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import * as AOS from '../../node_modules/aos';
import { AdminService } from './shared/services/admin.service';
import { FireService } from './shared/services/fire.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  users: any[] = [];
  title = 'app';

  @ViewChild('ContentWidth', { static: false }) ContentWidth: ElementRef; // get navbar

  constructor(
    public r: Renderer2,
    public AdminService: AdminService,
    public FireService: FireService,
    public toast: ToastrService,
  ) { 
  
  }
  test() {
    this.toast.success("I'm a toast!", "Success!");
  }

  ngOnInit() {
    AOS.init({
      offset: 200,
      duration: 700,
      easing: 'linear'
    });
    // this.adaptiveNavbar();
  }
  // adaptiveNavbar(): void {
  //   window.addEventListener('resize', () => {
  //     let deviceWidth = document.documentElement.clientWidth;
  //     if (deviceWidth <= 1150) { // change view contentWidth for tab and mobile version
  //       this.r.setStyle(this.ContentWidth.nativeElement, 'padding-left', '0');
  //     } else if (deviceWidth > 1150) {
  //       this.r.setStyle(this.ContentWidth.nativeElement, 'padding-left', '80px')
  //     }
  //     console.log(deviceWidth);

  //   });
  // }

}