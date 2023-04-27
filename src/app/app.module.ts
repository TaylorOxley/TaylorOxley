import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';

@NgModule({
  imports: [
    // ...
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    // ...
  ],
  // ...
})
export class AppModule { }





