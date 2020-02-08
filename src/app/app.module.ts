import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { WorkComponent } from './pages/work/work.component';
import { AboutComponent } from './pages/about/about.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ServicesComponent } from './pages/services/services.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NavComponent } from './components/nav/nav.component';
import { FilterComponent } from './components/nav/filter/filter.component';
import { FormsModule } from '@angular/forms';
import { SocialNetworksComponent } from './components/nav/social-networks/social-networks.component';
import { FooterComponent } from './components/footer/footer.component';
import { InfoContactComponent } from './components/info-contact/info-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WorkComponent,
    AboutComponent,
    BlogComponent,
    ServicesComponent,
    ContactComponent,
    NavComponent,
    FilterComponent,
    SocialNetworksComponent,
    FooterComponent,
    InfoContactComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
