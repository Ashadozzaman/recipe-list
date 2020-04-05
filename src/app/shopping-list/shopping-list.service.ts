import { Ingredient } from '../shared/Ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService{
    ingredientChanged = new EventEmitter<Ingredient[]>();
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
        this.ingredientChanged.emit(this.ingredients.slice());
    }
    addIngreditents(ingredients : Ingredient[]){
        // for (let ingredient of ingredients){
        //     this.addIngredient(ingredient);
        // }
        this.ingredients.push(...ingredients);
        this.ingredientChanged.emit(this.ingredients.slice());
    }

}