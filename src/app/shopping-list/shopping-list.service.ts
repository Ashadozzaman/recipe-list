import { Ingredient } from '../shared/Ingredient.model';

export class ShoppingListService{
    private ingredients: Ingredient[]  = [
        new Ingredient('Apple',9),
        new Ingredient('Banana',9),
        new Ingredient('Orange',9),
      ];

    getIngredients(){
       return this.ingredients.slice();
    }

    addIngredient(ingredient : Ingredient){
        this.ingredients.push(ingredient);
    }

}