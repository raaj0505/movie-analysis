import { Component, OnInit } from '@angular/core';
import {MovieServiceService} from '../../services/movie-service.service';
import {TitlePipe} from '../../pipes/title.pipe';
import {el} from '@angular/platform-browser/testing/src/browser_util';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  public theme = 'light';
  public movies: any = [];
  public searchText;
  public columnName: any = 'title';
  public column: any = '';
  public isDesc = false;
  public direction = -1;
  public page = 1;
  public movieBatch = [];
  public columns = [
    {
      key: 'title',
      displayName: 'Title'
    },
    {
      key: 'genres',
      displayName: 'Genres'
    },
    {
      key: 'language',
      displayName: 'Language'
    },
    {
      key: 'country',
      displayName: 'Country'
    },
    {
      key: 'budget',
      displayName: 'Budget'
    },
    {
      key: 'titleYear',
      displayName: 'Year'
    }
  ];
  constructor(private movieService: MovieServiceService) { }
  ngOnInit() {
    this.movieService.getMovieDetails().subscribe(data => {
      this.movies = data;
      this.movies.forEach(movie => {
        movie.genres = movie.genres ? movie.genres.split('|').join(' ') : '';
        movie.plot_keywords = movie.plot_keywords ? movie.plot_keywords.split('|').join(' ') : '';
      });
      this.setPage(1);
    }, error => {
      console.error('Error while fetching movies details', error);
    });
  }

  sort(property) {
    this.isDesc = !this.isDesc;
    this.column = property;
    this.direction = this.isDesc ? 1 : -1;
  }

  setPage(pageNum) {
    this.movieBatch = this.movies.slice(10 * (pageNum - 1), 10 * pageNum);
  }

}
