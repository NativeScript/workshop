import { Component } from '@angular/core';
import { CocktailService } from '../cocktail.service';
import { Observable, throwError } from 'rxjs';

@Component({
  selector: 'ns-test',
  moduleId: module.id,
  templateUrl: './service-test.component.html',
})
export class ServiceTestComponent {
  
  public response: string = 'Response goes here';
  
  constructor(private cocktailService: CocktailService) {
  }
  
  getIngredients() {
    this.cocktailService.getIngredients()
    .subscribe(
      result => this.response = JSON.stringify(result, null, 2),
      error => this.printError(error)
    );
  }
    
  findIngredients(term: string) {
    this.cocktailService.findIngredients(term)
    .subscribe(
      result => this.response = JSON.stringify(result, null, 2),
      error => this.printError(error)
    );
  }
      
  getCocktails(ingredient: string) {
    this.cocktailService.getCocktails(ingredient)
    .subscribe(
      result => this.response = JSON.stringify(result.slice(0, 10), null, 2),
      error => this.printError(error)
    );
  }
        
  getCocktail(id: string) {
    this.cocktailService.getCocktail(id)
    .subscribe(
      result => this.response = JSON.stringify(result, null, 2),
      error => this.printError(error)
    );
  }
          
  printError(error): Observable<never> {
    this.response = `Error: ${error}`
    console.log(this.response);
    return throwError(error);
  }
}
