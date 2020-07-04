import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'courses-example';
  showPanel = true;
  showCourses = false;
  showLike = true;

  tweet = {
    content: 'Content of the tweet',
    isLiked: true,
    likesCount: 1
  };

}
