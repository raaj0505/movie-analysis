import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'title'})
export class TitlePipe implements PipeTransform {
  transform(movies: any, searchText: any): any {
    if (searchText == null) { return movies; }
    return movies.filter(each => {
      return each.movie_title.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
    });
  }

}
