import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'budget'})
export class BudgetPipe implements PipeTransform {
  transform(movies: any, searchText: any): any {
    if (searchText == null || searchText === '') {
      return movies;
    }
    return movies.filter(each => {
      return each.budget && each.budget.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
    });
  }
}
