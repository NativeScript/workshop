import { Component, OnInit } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap, debounceTime, distinctUntilChanged, switchMap, map } from 'rxjs/operators';
import { CocktailOverviewRaw } from '../../models';
import { CocktailService } from '../../cocktail.service';

@Component({
  selector: 'ns-cocktails',
  templateUrl: './cocktails.component.html',
  styleUrls: ['./cocktails.component.css'],
  moduleId: module.id,
})
export class CocktailsComponent implements OnInit {

  /* Ingredient Search <start> */
  private searchTerm$ = new BehaviorSubject<string>('');
  public ingredients$: Observable<string[]>;
  /* Ingredient Search <end> */
  
  public selectedIngredient = '';
  public selectedIngredient$ = new BehaviorSubject<string>('');

  public cocktails$: Observable<CocktailOverviewRaw[]>;

  constructor(private cocktailService: CocktailService) { }

  ngOnInit() {
  /* Ingredient Search <start> */
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
  /* Ingredient Search <end> */

    this.cocktails$ = this.selectedIngredient$
    .pipe(
      tap(console.log),
      distinctUntilChanged(),
      switchMap(ingredient => this.cocktailService.getCocktails(ingredient))
    )
  }

  /* Ingredient Search <start> */
  search(value: string) {
    this.searchTerm$.next(value);
  }
  /* Ingredient Search <end> */

  updateCocktailList(ingredient: string) {
    this.selectedIngredient$.next(ingredient);
  }

}
