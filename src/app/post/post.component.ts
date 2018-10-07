import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/index';
import {Router} from '@angular/router';
import {PostService} from '../services/post.service';
import {Post} from '../models/post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit , OnDestroy {




 lastUpdate = new Date();
  posts: Post[];
  postSubscription: Subscription;
  @Input() postloveIts: number ;

  constructor(private postService: PostService, private router: Router) {}

 OnInit () {
}
 ngOnInit() {
   this.postSubscription = this.postService.postsSubject.subscribe(
     (posts: Post[]) => {
       this.posts = posts;
     }
   );
   this.postService.getPosts();
   this.postService.emitPosts();

  }

  ngOnDestroy() {
    this.postSubscription.unsubscribe();
  }

  }







