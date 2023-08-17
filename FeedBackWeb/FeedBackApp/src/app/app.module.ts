import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';       // For using [(ngModel)]
import { HttpClientModule } from '@angular/common/http'; // For making HTTP requests

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component'; // Our Login component
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { FeedbackListComponent } from './feedback/feedback-list/feedback-list.component';
import { FeedbackSubmitComponent } from './feedback/feedback-submit/feedback-submit.component';
import { ReactiveFormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FeedbackListComponent,
    FeedbackSubmitComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],  // No services here, but you might add them later
  bootstrap: [AppComponent]
})
export class AppModule { }
