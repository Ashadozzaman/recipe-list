import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/Ingredient.model';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[]  = [
    new Ingredient('Apple',9),
    new Ingredient('Banana',9),
    new Ingredient('Orange',9),
  ];
  constructor() { }

  ngOnInit(): void {
  }

  onIndridientAdded(ingredient: Ingredient){
    this.ingredients.push(ingredient);
  }

}
