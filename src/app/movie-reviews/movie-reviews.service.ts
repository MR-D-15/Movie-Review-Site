import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieReviewsService {

  constructor(private http: HttpClient) { }

  getAllMovieReviews() {
    return this.http.get('http://localhost:3000/api/v1/movie-reviews-list/all')
  }
}
