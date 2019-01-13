import { Component } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Test';
  items: Observable<{}>;
  collection;

  constructor(db: AngularFirestore) {
    this.collection = db.collection('/test');
    this.items = db.collection('/test').valueChanges();


    
  }

  addItem(doc, item) {
    // this.collection.add(item);
    this.collection.doc(doc).set(item);
  }

  deleteDoc(documentName) {
    // this.collection.add(item);
    this.collection.doc(documentName).delete().then(function () {
      console.log("Document successfully deleted!");
    }).catch(function (error) {
      console.error("Error removing document: ", error);
    });
  }
}
