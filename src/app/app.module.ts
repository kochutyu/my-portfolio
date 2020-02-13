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
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { SliderComponent } from './components/slider/slider.component';
import { ShowMoreComponent } from './components/show-more/show-more.component';
import { ProjectInfoComponent } from './components/project-info/project-info.component';
import { TagComponent } from './components/tag/tag.component';
import { UlLiDoneComponent } from './components/ul-li-done/ul-li-done.component';

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
    PortfolioComponent,
    SliderComponent,
    ShowMoreComponent,
    ProjectInfoComponent,
    TagComponent,
    UlLiDoneComponent,

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
