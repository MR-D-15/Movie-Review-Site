import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { HomeComponent } from './home/home.component';
import { MovieReviewsComponent } from './movie-reviews/movie-reviews.component';

const routes: Routes = [
  {path: 'movies', component: MovieListComponent},
  {path: 'home', component: HomeComponent},
  {path: 'movie-reviews', component: MovieReviewsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
