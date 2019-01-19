import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'genres'})
export class GenresPipe implements PipeTransform {
  transform(movies: any, searchText: any): any {
    if (searchText == null || searchText === '') {
      return movies;
    }
    return movies.filter(each => {
      return each.genres && each.genres.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
    });
  }
}
