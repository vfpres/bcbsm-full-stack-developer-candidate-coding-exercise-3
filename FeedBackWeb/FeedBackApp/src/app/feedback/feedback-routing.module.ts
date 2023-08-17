import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedbackListComponent } from './feedback-list/feedback-list.component';
import { FeedbackSubmitComponent } from './feedback-submit/feedback-submit.component';

const routes: Routes = [
  { path: '', component: FeedbackListComponent },
  { path: 'submit', component: FeedbackSubmitComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeedbackRoutingModule { }
