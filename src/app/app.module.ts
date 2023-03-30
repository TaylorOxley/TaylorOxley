import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClient} from '@angular/common/http';
import { UserInfoComponent } from './user-info.component';



@NgModule({
    declarations: [

     UserInfoComponent
    ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule
    ]
}
)

