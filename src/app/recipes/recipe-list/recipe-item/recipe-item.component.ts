import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
 @Input() recipe:Recipe;
//  @Output() recipeSeleted = new EventEmitter<void>();
  constructor( private recipeService: RecipeService) { }

  ngOnInit(): void {
  }
  onSelected(){
    // this.recipeSeleted.emit();
    this.recipeService.recipeSelected.emit(this.recipe);
  }

}