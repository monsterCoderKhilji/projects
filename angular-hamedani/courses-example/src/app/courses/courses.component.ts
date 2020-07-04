import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';
import { FavoriteInterfaceObject } from '../favorite/favorite.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor(private coursesService: CoursesService) { }

  title = 'List of Courses';
  assignText = '';
  courses: Array<string> = [];
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
    this.courses = this.getCourses();
    this.text = this.getText();
  }

  onSave(): void {
    this.coursesService.addCourse(this.name);
    this.name = '';
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
