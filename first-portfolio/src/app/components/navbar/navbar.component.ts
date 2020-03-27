import { Component, OnInit, Renderer2, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { AdminService } from 'src/app/shared/services/admin.service';
import { INavbar } from 'src/app/shared/interfaces/navbar.interface';
import { Observable } from 'rxjs';
import { CloudService } from 'src/app/shared/services/cloud.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  adminNavbar: Observable<any[]>;
  userNavbar: Observable<any[]>;
  signIn: boolean;
  fragment: string;




  @ViewChild('thisNavbar', { static: false }) thisNavbar: ElementRef; // get navbar
  @ViewChild('navbarUlHeight', {static: false}) navbarUlHeight: ElementRef; // get ul height
  @ViewChild('firstNavbarLi', {static: false}) firstNavbarLi: ElementRef; // get ul height
  // @ViewChild('closeMenuPhone', {static: false}) closeMenuPhone: ElementRef; // get closeMenuPhone
  @ViewChild('navbarPhone', {static: false}) navbarPhone: ElementRef;
  constructor(
    private CloudService: CloudService,
    public AdminService: AdminService,
    private db: AngularFirestore,
    private r: Renderer2
  ) {

    this.signIn = this.AdminService.signIn
    this.adminNavbar = this.CloudService.getAdminNavbar();
    this.userNavbar = this.CloudService.getUserNavbar();
  }
  deviceWidth: number = window.innerWidth; // condition for navbar
  deviceHeight: number = document.documentElement.clientHeight;

  scrollTop:number = document.documentElement.scrollTop;
  
  ngOnInit() {
    
    window.addEventListener('resize', () => { // get width browser
      this.deviceWidth = window.innerWidth;
      if (this.deviceWidth >= 1150) { // show navbar for desctop
        this.r.setStyle(this.thisNavbar.nativeElement, 'display', 'flex');
      }
    });

    console.log(document.querySelector('.menuPhone'));
    
    
    // document.addEventListener('scroll', () => { // show navbar for tab and mobile
      
    //   this.scrollTop = document.documentElement.scrollTop;
      
    //   if (this.scrollTop >= this.deviceHeight/2) {
    //     this.r.setStyle(this.thisNavbar.nativeElement, 'display', 'flex');
    //   }else if (this.deviceWidth > 1150) {
    //     this.r.setStyle(this.thisNavbar.nativeElement, 'display', 'flex');
    //   }
    //   else {
    //     this.r.setStyle(this.thisNavbar.nativeElement, 'display', 'flex');
    //   }
    // });
  }

  

  countDownUp: number = 0;
  downUp(): void{
    this.countDownUp++;
    if(this.countDownUp % 2 !== 0) {
      this.navbarUlHeight.nativeElement.style.height = '100vh';
      this.thisNavbar.nativeElement.style.maxHeight = '100vh';
      this.firstNavbarLi.nativeElement.style.marginBottom = '25vh';
      this.firstNavbarLi.nativeElement.style.top = '8px';
    } else{
      this.navbarUlHeight.nativeElement.style.height = '45px'
      this.thisNavbar.nativeElement.style.maxHeight = '65px';
      this.firstNavbarLi.nativeElement.style.marginBottom = '0';
      this.firstNavbarLi.nativeElement.style.top = '0';
    }
  }

  scrollToElement($element): void {
    console.log($element);
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
}
