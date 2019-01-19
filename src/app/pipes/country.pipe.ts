import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'country'})
export class CountryPipe implements PipeTransform {
  transform(movies: any, searchText: any): any {
    if (searchText == null || searchText === '') {
      return movies;
    }
    return movies.filter(each => {
      return each.country && each.country.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
    });
  }
}
