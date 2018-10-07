import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PostService} from '../../services/post.service';
import {Router} from '@angular/router';
import {Post} from '../../models/post.model';
import {Subscription} from 'rxjs/index';
import {getLocaleDateTimeFormat} from "@angular/common";

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {
  postForm: FormGroup;
  postSubscription: Subscription;
  constructor(private formBuilder: FormBuilder ,
              private router: Router , private postsService: PostService ) { }

  ngOnInit() {
    this.initForm();
  }
  initForm(){
    this.postForm = this.formBuilder.group({
      title: ['' , Validators.required],
      content: ['', Validators.required]
    });
  }

  onSavePost(){
    const title = this.postForm.get('title').value;
    const content = this.postForm.get('content').value;
    //const cr = this.postForm.get('datecreation').value;
    const like = 0;
    const date_created = new Date;
    const newPost = new Post(title, content);
    newPost.postcreated_at  =  date_created.toDateString()  ;
    newPost.postloveIts = like;

    console.log('onSavePost ici');
    this.postsService.createNewPost(newPost);

    this.router.navigate(['/posts']);
  }



}
