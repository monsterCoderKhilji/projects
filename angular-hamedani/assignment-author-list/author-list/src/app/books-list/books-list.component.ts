import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {

  title = 'List of courses';
  imageUrl: String = 'http://lorempixel.com/400/200';

  constructor() { }

  ngOnInit() {
  }

}
