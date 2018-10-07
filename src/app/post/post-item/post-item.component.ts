import { Component, OnInit  , Input} from '@angular/core';
import {Post} from '../../models/post.model';
import {PostService} from '../../services/post.service';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss']
})
export class PostItemComponent implements OnInit {

  @Input() post: Post;

  constructor(private postService: PostService) { }

  ngOnInit() {
  }
  onLoveIt(post: Post) {
    // post.loveIts++;
    this.postService.increaseLoveIt(post);
  }

  onDontLoveIt(post: Post) {
    // post.loveIts--;
    this.postService.decreaseLoveIt(post);
  }

  onDeletePost(post: Post) {
    this.postService.removePost(post);
  }

}
