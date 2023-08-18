import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {FeedbackListComponent} from "./feedback/feedback-list/feedback-list.component";
import {FeedbackSubmitComponent} from "./feedback/feedback-submit/feedback-submit.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'feedback-list', component: FeedbackListComponent},
  { path: 'feedback-submit', component: FeedbackSubmitComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
