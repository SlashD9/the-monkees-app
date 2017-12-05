import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, Validators } from '@angular/forms';
import { CarouselModule } from 'ngx-bootstrap/carousel';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { BandComponent } from './components/band/band.component';
import { MusicComponent } from './components/music/music.component';
import { VideoComponent } from './components/video/video.component';
import { PhotosComponent } from './components/photos/photos.component';
import { DavyComponent } from './components/davy/davy.component';
import { MickyComponent } from './components/micky/micky.component';
import { MichaelComponent } from './components/michael/michael.component';
import { PeterComponent } from './components/peter/peter.component';
import { ContactComponent } from './components/contact/contact.component';
import { ToursComponent } from './components/tours/tours.component';
import { BookingComponent } from './components/booking/booking.component';
import { DataService } from './Services/data.services';
import { CarouselComponent } from 'ngx-bootstrap/carousel/carousel.component';
import { AlertModule } from 'ngx-bootstrap';

const appRoutes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full'},
  { path: 'band', component: BandComponent, pathMatch: 'full'},
  { path: 'video', component: VideoComponent, pathMatch: 'full'},
  { path: 'music', component: MusicComponent, pathMatch: 'full'},
  { path: 'photos', component: PhotosComponent, pathMatch: 'full'},
  { path: 'davy', component: DavyComponent, pathMatch: 'full'},
  { path: 'micky', component: MickyComponent, pathMatch: 'full'},
  { path: 'michael', component: MichaelComponent, pathMatch: 'full'},
  { path: 'peter', component: PeterComponent, pathMatch: 'full'},
  { path: 'contact', component: ContactComponent, pathMatch: 'full'},
  { path: 'tours', component: ToursComponent, pathMatch: 'full'},
  { path: 'booking', component: BookingComponent, pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    BandComponent,
    MusicComponent,
    VideoComponent,
    PhotosComponent,
    DavyComponent,
    MickyComponent,
    MichaelComponent,
    PeterComponent,
    ContactComponent,
    ToursComponent,
    BookingComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    CarouselModule.forRoot(),
    AlertModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
