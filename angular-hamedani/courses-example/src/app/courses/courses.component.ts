import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';
import { FavoriteInterfaceObject } from '../favorite/favorite.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor(private coursesService: CoursesService) { }

  title = 'List of Courses';
  assignText = '';
  courses: Array<any> = [];
  imageUrl = 'http://lorempixel.com/400/200';
  colSpan = 3;
  valueSpan = 3;
  isActive = true;
  name = '';
  course: any = {
    name: 'Angular',
    rating: 4.9745,
    students: 30123,
    price: 190.95,
    releaseDate: new Date(2020, 6, 28)
  };
  text = " ";
  post = {
    title: 'Favorite',
    isFavorite: true
  };

  ngOnInit(): void {
    this.text = this.getText();
  }

  onRemoveCourse(index: number): void {
    this.courses.splice(index, 1);
  }

  onSave(): void {
    this.coursesService.addCourse(this.name);
    this.name = '';
  }

  loadCourses() {
    this.courses = this.coursesService.getCourses();
  }

  trackCourse(id, course) {
    return course ? course.id : undefined;
  }

  onKeyUp(): void {
    console.log('Value is ' + this.name);
  }

  onChangeNotify(eventArgs: FavoriteInterfaceObject): void {
    console.log('Favorite is clicked', eventArgs.newValue);
  }

  getTitle(): string {
    return this.title;
  }

  getCourses(): Array<string> {
    return this.coursesService.getCourses();
  }

  getText(): string {
    return this.coursesService.getLorem();
  }

}
