import { AngularFireModule } from '@angular/fire';
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';


@NgModule({
  imports: [
    HttpClientModule

    AppComponent
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
   
  ],
 
})
export class AppModule { }





