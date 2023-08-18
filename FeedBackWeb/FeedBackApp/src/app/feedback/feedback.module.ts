import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedbackRoutingModule } from './feedback-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FeedbackSubmitComponent } from './feedback-submit/feedback-submit.component';
import { FeedbackListComponent } from './feedback-list/feedback-list.component';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FeedbackRoutingModule
  ]
})
export class FeedbackModule { }
