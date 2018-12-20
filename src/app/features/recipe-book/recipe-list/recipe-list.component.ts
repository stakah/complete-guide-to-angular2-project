import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '@app/models';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
   
  recipes: Recipe[] = [];

  constructor() {
    this.recipes.push(new Recipe('Gingerbread', 'Delicious Xtmas gingerbread cookies.', 'assets/images/gingerbread.png'));
    this.recipes.push(new Recipe('Gingerbread 2', 'Delicious Xtmas gingerbread cookies 2.', 'assets/images/gingerbread.png'));
   }

  ngOnInit() {
  }

  onRecipeSelected(recipe:Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
