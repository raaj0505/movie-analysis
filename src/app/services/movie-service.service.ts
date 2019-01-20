import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {

  private movieDetailsEndpoint = 'http://demo8168888.mockable.io/movies';
  constructor(private http: HttpClient) { }
  getMovieDetails() {
    // not called given url as its not allowing the cors request;
    return this.http.get(this.movieDetailsEndpoint);
  }

}
