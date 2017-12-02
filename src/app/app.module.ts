import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { BandComponent } from './components/band/band.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full'},
  { path: 'band', component: BandComponent, pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    BandComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
