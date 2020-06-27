import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor(private coursesService: CoursesService) { }

  title = 'List of Courses';
  courses: Array<string> = [];

  ngOnInit(): void {
    this.courses = this.getCourses();
  }

  getTitle(): string {
    return this.title;
  }

  getCourses(): Array<string> {
    return this.coursesService.getCourses();
  }

}
