import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();
    private recipes : Recipe[] = [
        new Recipe( 'The Name of Recipe', 'The Description of Recipe 1',
        'https://www.inspiredtaste.net/wp-content/uploads/2018/12/Sauteed-Zucchini-Recipe-1-1200.jpg'),
        new Recipe( 'Recipe', 'The Description of Recipe 2',
        'https://www.inspiredtaste.net/wp-content/uploads/2018/12/Sauteed-Zucchini-Recipe-1-1200.jpg'),
        new Recipe( 'The Name ', 'The Description of Recipe 3',
        'https://www.inspiredtaste.net/wp-content/uploads/2018/12/Sauteed-Zucchini-Recipe-1-1200.jpg')
      ];

      getRecipes(){
          return this.recipes.slice();
      }
}