import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MoviesComponent } from './components/movies/movies.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {TitlePipe} from './pipes/title.pipe';
import {LanguagePipe} from './pipes/language.pipe';
import {FilterByPipe} from './pipes/filterBy.pipe';
import {CountryPipe} from './pipes/country.pipe';
import {BudgetPipe} from './pipes/budget.pipe';
import {TitleYearPipe} from './pipes/titleYear.pipe';
import {GenresPipe} from './pipes/genres.pipe';
import {OrderByPipe} from './pipes/orderBy.pipe';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {DropdownModule, MDBBootstrapModule} from 'angular-bootstrap-md';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    TitlePipe,
    LanguagePipe,
    FilterByPipe,
    CountryPipe,
    BudgetPipe,
    TitleYearPipe,
    GenresPipe,
    OrderByPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    MDBBootstrapModule.forRoot(),
    DropdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
