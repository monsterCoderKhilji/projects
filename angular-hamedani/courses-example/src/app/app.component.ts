import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'courses-example';
  showPanel = false;
  showCourses = false;
  showLike = false;
  showZippy = false;
  showApp = false;
  viewMode = 'map';
  showContactForm = false;
  showCourseForm = true;
  
  tweet = {
    content: 'Content of the tweet',
    isLiked: true,
    likesCount: 1
  };

}
