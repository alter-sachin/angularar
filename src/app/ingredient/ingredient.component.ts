import { Component, OnInit } from '@angular/core';
import {IngredientService} from "../ingredient.service";
import {Ingredient} from "../_models/ingredient";

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css']
})
export class IngredientComponent implements OnInit {

  error = '';
  newIngredient: Ingredient = new Ingredient();

  constructor(private ingredientService: IngredientService) { }

  ngOnInit() {
  }

  submit() {
    this.ingredientService.saveIngredient(this.newIngredient).then(response => {
      console.log(response);
    })
  }

}
