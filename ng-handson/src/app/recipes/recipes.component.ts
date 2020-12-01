import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent implements OnInit {
  dataSource = [
    { username: 'A', age: 30, title: 'Title1' },
    { username: 'B', age: 31, title: 'Title2' },
    { username: 'C', age: 32, title: 'Title3' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
