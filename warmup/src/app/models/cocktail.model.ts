import { CocktailRecipeRaw } from './raw-cocktail.model';

export interface Ingredient {
  ingredient: string;
  measure: string;
}

export class CocktailRecipe {
  id: string;
  name: string;
  category: string;
  iba: string;
  alcoholic: string;
  glass: string;
  instructions: string;
  imageUrl: string;

  ingredients: Ingredient[];

  constructor(raw: CocktailRecipeRaw) {
    this.id = raw.idDrink;
    this.name = raw.strDrink;
    this.category = raw.strCategory;
    this.iba = raw.strIBA;
    this.alcoholic = raw.strAlcoholic;
    this.glass = raw.strGlass;
    this.instructions = raw.strInstructions;
    this.imageUrl = raw.strDrinkThumb;

    this.ingredients = [];
    for (let i = 1; i < 15; i++) {
      const ingredient = raw[`strIngredient${i}`];
      const measure = raw[`strMeasure${i}`];

      if (ingredient && measure) {
        this.ingredients.push({ ingredient, measure });
      }
    }
  }
}