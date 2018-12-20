import { Component, OnInit } from '@angular/core';
import { Ingredient } from '@app/models';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  ingredients:Ingredient[] = [];

  constructor() {
    this.ingredients.push(new Ingredient('Apple', 1));
    this.ingredients.push(new Ingredient('Tomato', 2));
   }

  ngOnInit() {
  }

  onIngredientAdded(ingredient:Ingredient) {
    this.ingredients.push(ingredient);
  }
}
