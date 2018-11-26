import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe/recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
@Injectable(

)
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  //property:class recipe
  private recipes:Recipe[]=[
    new Recipe('Burger','A humberger with a rim of lettuce sitting on a black plate against a black backgound',
    'https://upload.wikimedia.org/wikipedia/commons/6/62/NCI_Visuals_Food_Hamburger.jpg',
  [
    new Ingredient('meal',1),
    new Ingredient('tomato',2),
  ]),
  new Recipe('Special Martabak','Sweet Martabak or originally called Hok Lo Pan originally was a typical food of Bangka Belitung. Hok Lo Pan or Martabak was created by the Hakka (Khek) people of Bangka. The only one in the world, the food of the Hakka tribe (khek) who uses the name Hoklo tribe. Almost everyone in big cities like in Jakarta knows Bangka Martabak, his real name in Bangka is Hok Lo Pan (Martabak). Meaning Hurfiah Hok Lo Pan (Martabak) is the Orang Lo Lo Cake.','../src/app/img/manis.jpg',
[
  new Ingredient('chicken',1),
  new Ingredient('flour',3),
  new Ingredient('egg',1),
  new Ingredient('spices',1)
]),  
];

  getRecipes(){
    return this.recipes.slice();
  }
  //tambahkan method addIngredientsShoppingList dengan parameter ingredient[]
  addIngredientsShoppingList(ingredients: Ingredient[]){
    this.slsService.addIngredients(ingredients);
  }
  getRecipe(index:number){
    return this.recipes [index] ;
  }
  //tambahkan parameter pada construktor
constructor(private slsService: ShoppingListService) { }

}