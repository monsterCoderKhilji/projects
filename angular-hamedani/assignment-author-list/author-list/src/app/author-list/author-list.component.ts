import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {

  authorList : Array<String>  = [];

  constructor(private authorService : AuthorService) { }

  ngOnInit() {
    this.authorList = this.authorService.getAuthors();


  }

}
