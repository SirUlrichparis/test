import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { AngularFirestore } from '@angular/fire/firestore';
const config = {
  apiKey: 'AIzaSyDhz6rXJv4QThfryYCD2htDMoc7TNv1S7k',
  authDomain: 'test-96e8b.firebaseapp.com',
  databaseURL: 'https://test-96e8b.firebaseio.com',
  projectId: 'test-96e8b',
  storageBucket: 'test-96e8b.appspot.com',
  messagingSenderId: '257591783536'
};
@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
