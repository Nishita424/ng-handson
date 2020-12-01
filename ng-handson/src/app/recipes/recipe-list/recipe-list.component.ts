import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A test recipe1',
      'Dessert',
      'Test1 recipe description',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8Bx0u8nhD3HgfJtVhL6GQ4L9w-5qr3NWkGw&usqp=CAU'
    ),
    new Recipe(
      'A test recipe2',
      'Cuisine',
      'Test2 recipe description',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=960,872'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
