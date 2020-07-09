import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-udemy-course',
  templateUrl: './udemy-course.component.html',
  styleUrls: ['./udemy-course.component.css']
})
export class UdemyCourseComponent implements OnInit {

  categories: any[] = [
    { id: 1, name: 'Development' },
    { id: 2, name: 'Learning' },
    { id: 3, name: 'Psychology' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  submit(f) {
    console.log(f);
  }

}
