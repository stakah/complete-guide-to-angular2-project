import { Component, OnInit } from '@angular/core';
import { Recipe } from '@app/models';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.scss']
})
export class RecipeBookComponent implements OnInit {
  selectedRecipe:Recipe;
  
  constructor() { }

  ngOnInit() {
  }

}
