import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, Validators } from '@angular/forms';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ModalModule } from 'ngx-bootstrap/modal';

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
import { VgCoreModule } from 'videogular2/core';
import { VgControlsModule } from 'videogular2/controls';
import { VgOverlayPlayModule } from 'videogular2/overlay-play';
import { VgBufferingModule } from 'videogular2/buffering';
import { BsModalService } from 'ngx-bootstrap/modal/bs-modal.service';
import { ComponentLoaderFactory } from 'ngx-bootstrap/component-loader/component-loader.factory';
import { PositioningService } from 'ngx-bootstrap/positioning/positioning.service';
import { EmailComponent } from './components/email/email.component';

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
    BookingComponent,
    EmailComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    CarouselModule.forRoot(),
    AlertModule,
    VgCoreModule,
    ModalModule
  ],
  providers: [
    DataService,
    BsModalService,
    ComponentLoaderFactory,
    PositioningService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
