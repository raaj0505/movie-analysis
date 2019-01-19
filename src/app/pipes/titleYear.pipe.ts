import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'titleYear'})
export class TitleYearPipe implements PipeTransform {
  transform(movies: any, searchText: any): any {
    if (searchText == null || searchText === '') {
      return movies;
    }
    return movies.filter(each => {
      return each.title_year && each.title_year.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
    });
  }
}
