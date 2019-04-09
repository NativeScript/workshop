import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CocktailService } from '../../cocktail.service';
import { CocktailRecipe } from '../../models/cocktail.model';

@Component({
  selector: 'ns-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
  moduleId: module.id,
})
export class RecipeComponent implements OnInit {
  public cocktail: CocktailRecipe;

  constructor(
    private cocktailService: CocktailService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.params.id;

    this.cocktailService.getCocktail(id)
      .subscribe(cocktail => this.cocktail = cocktail);
  }
}
