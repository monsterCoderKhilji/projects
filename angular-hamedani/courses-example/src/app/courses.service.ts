import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  courses: Array<string> = ['course1', 'course2', 'course3'];

  constructor() { }

  getCourses() {
    return this.courses;
  }

}
