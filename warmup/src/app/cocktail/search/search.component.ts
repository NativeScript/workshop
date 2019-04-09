import { Component, OnInit } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap, debounceTime, distinctUntilChanged, switchMap, map } from 'rxjs/operators';

import { CocktailService } from '../../cocktail.service';

@Component({
  selector: 'search-ingredient',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  moduleId: module.id,
})
export class SearchComponent implements OnInit {
  ingredient: string;

  public selectIngredient(val: string) {
    this.ingredient = val;
  }
  
  private searchTerm$ = new BehaviorSubject<string>('');
  public ingredients$: Observable<string[]>;

  constructor(private cocktailService: CocktailService) { }

  ngOnInit() {
    this.ingredients$ = this.searchTerm$
    .pipe(
      debounceTime(250),
      distinctUntilChanged(),
      map(term => (term || '').trim().toLowerCase()),
      tap(term => console.log(`Term: [${term}]`)),
      switchMap(term => 
        this.cocktailService.findIngredients(term)
      ),
    );
  }

  search(value: string) {
    this.searchTerm$.next(value);
  }
}
