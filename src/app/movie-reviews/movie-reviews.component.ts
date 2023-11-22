import { MovieReviewsService } from './movie-reviews.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-reviews',
  templateUrl: './movie-reviews.component.html',
  styleUrls: ['./movie-reviews.component.css']
})
export class MovieReviewsComponent implements OnInit {
    constructor(private movieReviewsService: MovieReviewsService) {}

    movieReviews: any;

    ngOnInit(): void {
      this.getAllMovieReviews();
    }

    getAllMovieReviews() {
      this.movieReviewsService.getAllMovieReviews().subscribe(
        (res: any) => {
          this.movieReviews = res.data;
        },
        error => {
          alert('Something went wrong!!!');
        }
      )
    }

    getMovieReviewDetails() {

    }

    createMovieReview() {

    }

    updateMovieReview() {

    }

    deleteMovieReview() {

    }
}
