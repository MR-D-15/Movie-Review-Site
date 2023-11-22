import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { MovieListService } from './movie-list.service';
import {FormGroup, FormControl, Validators} from '@angular/forms'

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
    constructor(private movieListService: MovieListService) {}
    movies: any = [];
    showCreateOverlay = false;
    showUpdateOverlay = false;
    form: any;

    ngOnInit(): void {
      this.getMovieList();
    }

    initiateForm() {
      this.form = new FormGroup({
        name: new FormControl('', Validators.required),
        code: new FormControl('', Validators.required)
      })
    }

    overlayPanel() {
      this.showCreateOverlay = !this.showCreateOverlay;
      this.initiateForm();
    }

    getMovieList() {
      this.movieListService.getAllMovies().subscribe(
        (res: any) => {
          this.movies = res.data; 
        },
        (error) => {
          console.error('Error fetching movie list:', error);
        }
      );
    }

    deleteMovie(code: any) {
      this.movieListService.deleteMovie({code}).subscribe(
        ()=> {
          this.getMovieList();
        },
        (error) => {
          alert('Error deleting the movie');
        }
      )
    }

    createMovie() {
      this.movieListService.createMovie(this.form.value).subscribe(
        ()=>{
          this.getMovieList();
        },
        (error) => {
          alert('Error creating the movie');
        }
      )

      this.overlayPanel();
    }
    
}
