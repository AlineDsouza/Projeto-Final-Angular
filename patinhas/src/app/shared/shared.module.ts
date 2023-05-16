import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { HomeContentComponent } from './components/home-content/home-content.component';
import { MidleContentComponent } from './components/midle-content/midle-content.component';
import { AboutUsContentComponent } from './components/about-us-content/about-us-content.component';
import { PhonePipe } from './pipes/phone.pipe';


@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    HomeContentComponent,
    MidleContentComponent,
    AboutUsContentComponent,
    PhonePipe
   
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
   exports:[
    HeaderComponent,
    FooterComponent,
    HomeContentComponent,
    MidleContentComponent,
    AboutUsContentComponent,
    PhonePipe
   ]
})
export class SharedModule { }
