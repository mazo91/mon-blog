import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import {RouterModule, Routes} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { PostFormComponent } from './post/post-form/post-form.component';
import {PostService} from './services/post.service';
import { HeaderComponent } from './header/header.component';
import { PostItemComponent } from './post/post-item/post-item.component';

const appRoutes: Routes = [
  { path: 'posts', component: PostComponent },
  { path: 'post-new', component: PostFormComponent },
  { path: '', redirectTo: 'posts', pathMatch: 'full' },
  { path: '**', redirectTo: 'posts' }
  ];
@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostFormComponent,
    HeaderComponent,
    PostItemComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
