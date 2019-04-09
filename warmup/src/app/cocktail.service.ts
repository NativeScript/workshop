import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

import { CocktailApiResult, IngredientRaw, CocktailOverviewRaw, CocktailRecipeRaw, CocktailRecipe } from './models';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  private baseUrl: Readonly<string> = 'https://www.thecocktaildb.com/api/json/v1/1';

  constructor(private http: HttpClient) { }

  // get a list of ingredients: https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list
  getIngredients(): Observable<string[]> {
    return this.notImplemented('getIngredients');

    // 1. Construct a url based on www.thecocktaildb.com/api/json/v1/1/list.php?i=list
    // ideally by combining baseURL and /list.php
    // i.e. const url = 'bla';

    // 2. There is no need to construct HttpParams, as ?i=list can be hardcoded in the url
      
    /* 3. Call http.get with the url and params, and return it
     * You can call get with a generic type for CocktailApiResult<IngredientRaw>
     * CocktailApiResult is an interface, which contains one attribute => drinks: T[]
     * This is because the thecocktaildb API always returns the result with an array of drinks (even when you query ingredients)
     * By combining CocktailApiResult and another type 
     * (i.e. CocktailApiResult<Date> - we are telling TypeScript that we expect the result to contain { drinks: Date[] })
     * In the case of this API call, you should use IngredientRaw as the T type
     * i.e. 
      return this.http.get<YourTypeHere>(url)
    */

    /* 4. 
     * The result will be returned as an array of IngredientRaw objects, like this:
      {
        drinks: [
          { strIngredient1: 'Rum' }, { strIngredient1: 'Water' } 
        ]
      }
     * Map the result so that it is returned as an array of strings, like this: ['Rum', 'Water']
     * 
     * i.e.
      .pipe(
        map(result => result.drinks.map(raw => raw.strIngredient1) )
      )
     */

     // 5. Can you add a another map to the pipe to sort the ingredients alphabeticaly?
  }

  findIngredients(term: string) {
    term = (term || '').toLowerCase();

    return this.getIngredients()
    .pipe(
      map(ingredients => 
        ingredients.filter(val => val.toLowerCase().includes(term))
      )
    );
  }


  // get a list of drinks and a picture for a given ingredient: https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin
  getCocktails(ingredient: string): Observable<CocktailOverviewRaw[]> {
    return this.notImplemented('getCocktails');

    // 1. Construct a url based on www.thecocktaildb.com/api/json/v1/1/filter.php
    // ideally by combining baseURL and /filter.php

    // 2. Construct HttpParams, where 'ingredient' should be passed as 'i' (see in the url filter.php?i=Gin)
      
    // 3. Call http.get with the url and params, and return it
      // you can call get with a generic type for CocktailApiResult<CocktailOverviewRaw>

    // 4. map the output to return result.drinks or an empty array if result is null
      // note that the result might be null when no drinks are found
  }

  // get a recipe for a given drink ID: https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=13940
  getCocktail(id: string): Observable<CocktailRecipe> {
    return this.notImplemented('getCocktail');

    // 1. Construct a url based on www.thecocktaildb.com/api/json/v1/1/lookup.php
    // ideally by combining baseURL and /lookup.php

    // 2. Construct HttpParams, where 'id' should be passed as 'i' (see in the url lookup.php?i=13940)
      
    // 3. Call http.get with the url and params, and return it
    // you can call get with a generic type for <CocktailApiResult<CocktailRecipeRaw>

    // 4. map the output using CocktailRecipe() constructor
    // note that the result returns an array of drinks, while we only need the first item
  }

  private notImplemented(fname: string): Observable<any> {
    return throwError(`${fname} Not Implemented`);
  }
}