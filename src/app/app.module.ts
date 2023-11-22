import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieListService } from './movie-list/movie-list.service';
import {ReactiveFormsModule} from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { MovieReviewsComponent } from './movie-reviews/movie-reviews.component'
import { MovieReviewsService } from './movie-reviews/movie-reviews.service';
@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    NavbarComponent,
    HomeComponent,
    MovieReviewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    MovieListService,
    MovieReviewsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
