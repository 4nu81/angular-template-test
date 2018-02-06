import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { MyUserComponent } from './user/my-user/my-user.component';


@NgModule({
  declarations: [
    AppComponent,
    MyUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
