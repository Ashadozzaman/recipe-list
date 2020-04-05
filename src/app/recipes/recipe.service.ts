import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/Ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
@Injectable()
export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();
    private recipes : Recipe[] = [
        new Recipe( 'The Name of Recipe', 'The Description of Recipe 1',
        'https://www.inspiredtaste.net/wp-content/uploads/2018/12/Sauteed-Zucchini-Recipe-1-1200.jpg',
        [
            new Ingredient('Kola',3),
            new Ingredient('Ciken',3),

        ]),
        new Recipe( 'Recipe', 'The Description of Recipe 2',
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-crispy-chicken-thighs-garlic-rosemary-1567793052.png?crop=1.00xw:0.755xh;0,0.0192xh&resize=980:*',
        [
            new Ingredient('Prii',3),
            new Ingredient('Barger',3),
        ]),
        new Recipe( 'The Name ', 'The Description of Recipe 3',
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/updated-classic-chicken-salad-1579640234.jpg?crop=0.9115646258503401xw:1xh;center,top&resize=768:*',
        [
            new Ingredient('Meet',3),
            new Ingredient('Feash',3),
        ])
      ];

      getRecipes(){
          return this.recipes.slice();
      }
      constructor(private slService:ShoppingListService){}
      addIngridentToSL(ingredients:Ingredient[]){
        this.slService.addIngreditents(ingredients);
      }
}