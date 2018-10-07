import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mon-blog';
  //lastUpdate = new Date();

  constructor() {

    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyD7kJShtC_B2ikekpGTHg2_GwhSggy9lis",
      authDomain: "posts-e0c6f.firebaseapp.com",
      databaseURL: "https://posts-e0c6f.firebaseio.com",
      projectId: "posts-e0c6f",
      storageBucket: "posts-e0c6f.appspot.com",
      messagingSenderId: "636186752625"
    };
    firebase.initializeApp(config);
  }

}
