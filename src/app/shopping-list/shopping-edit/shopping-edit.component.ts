import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/Ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
 @ViewChild('nameInput') nameInputRef:ElementRef;
 @ViewChild('amountInput') amountInputRef:ElementRef;
  // ingredientAdded = new EventEmitter<{name:string, amount:number}>();
  // @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor( private slService : ShoppingListService) { }

  ngOnInit(): void {
  }
  onAddIthem(){
    const ingName = this.nameInputRef.nativeElement.value;
    const ingamount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName,ingamount);
    // this.ingredientAdded.emit(newIngredient);
    this.slService.addIngredient(newIngredient);

  }

}