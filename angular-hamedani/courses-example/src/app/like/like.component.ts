import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {

  @Input() likeCount: number;
  @Input() tweetIsLiked: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  onClickLike() {
    this.likeCount = (this.likeCount === 0) ? 1 : 0;
    this.tweetIsLiked = !this.tweetIsLiked;
  }
}
