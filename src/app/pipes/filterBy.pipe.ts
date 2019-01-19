import {Pipe, PipeTransform} from '@angular/core';
import {TitlePipe} from './title.pipe';
import {LanguagePipe} from './language.pipe';
import {TitleYearPipe} from './titleYear.pipe';
import {GenresPipe} from './genres.pipe';
import {BudgetPipe} from './budget.pipe';
import {CountryPipe} from './country.pipe';

@Pipe({name: 'filterBy'})
export class FilterByPipe implements PipeTransform {
  pipes = {
    'title': new TitlePipe(),
    'language': new LanguagePipe(),
    'titleYear': new TitleYearPipe(),
    'budget': new BudgetPipe(),
    'country': new CountryPipe(),
    'genres': new GenresPipe(),
  };
  transform(movies: any, pipeName: any, searchText: any): any {
    if (pipeName == null || pipeName === '') {
      return movies;
    }
    return this.pipes[pipeName].transform(movies, searchText);
  }
}
