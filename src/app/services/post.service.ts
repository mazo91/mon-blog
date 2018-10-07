import {Post} from '../models/post.model';
import {Subject} from 'rxjs/index';
import * as firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;
import {HttpClient} from '@angular/common/http';

export class PostService {

  posts: Post[] = [];
  postsSubject = new Subject<Post[]>();

  constructor() {
   // this.getPosts();
  }
  emitPosts() {
    this.postsSubject.next(this.posts);
  }
  getPosts()
  {firebase.database().ref('/posts')
      .on('value', (data: DataSnapshot) => {
          this.posts = data.val() ? data.val() : [];
          this.emitPosts();
        }
      );

  }

  savePosts() {
    firebase.database().ref('/posts').set(this.posts);
    console.log('bien enregister!');
  }

  createNewPost(newPost: Post) {
    this.posts.push(newPost);
    this.savePosts();

    this.emitPosts();
  }

  removePost(post: Post) {
    const postIndexToRemove = this.posts.findIndex(
      (postEl) => {
        if(postEl === post) {
          return true;
        }
      }
    );
    this.posts.splice(postIndexToRemove, 1);
    this.savePosts();
    this.emitPosts();
  }

  increaseLoveIt(post: Post) {
    this.updateLoveIt(post, +1);
  }

  decreaseLoveIt(post: Post) {
    this.updateLoveIt(post, -1);
  }

  updateLoveIt(post: Post, count: number) {
    post.postloveIts += count;
    this.savePosts();
  }
}
