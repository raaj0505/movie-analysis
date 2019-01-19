import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'language'})
export class LanguagePipe implements PipeTransform {
  transform(movies: any, searchText: any): any {
    if (searchText == null || searchText === '') {
      return movies;
    }
    return movies.filter(each => {
      return each.language && each.language.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
    });
  }
}
