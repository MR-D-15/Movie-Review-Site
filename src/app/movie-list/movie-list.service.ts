import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MovieListService {

  constructor(private http: HttpClient) { }

  getAllMovies() {
    return this.http.get('http://localhost:3000/api/v1/movie-list/all');
  }

  deleteMovie(code: any) {
    return this.http.post('http://localhost:3000/api/v1/movie-list/delete', code);
  }

  createMovie(data: any) {
    return this.http.post('http://localhost:3000/api/v1/movie-list/create', data)
  }
}
