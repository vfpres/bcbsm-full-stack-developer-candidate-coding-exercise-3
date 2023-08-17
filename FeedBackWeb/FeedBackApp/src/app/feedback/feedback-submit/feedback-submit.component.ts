import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { FeedbackService } from '../../feedback.service';

@Component({
  selector: 'app-feedback-submit',
  templateUrl: './feedback-submit.component.html'
})
export class FeedbackSubmitComponent implements OnInit {

  feedbackForm!: FormGroup;

  constructor(private fb: FormBuilder, private feedbackService: FeedbackService) { }

  ngOnInit(): void {
    this.feedbackForm = this.fb.group({
      rating_value: ['', Validators.required],
      comment: ['']
    });
  }

  submitFeedback() {
    if (this.feedbackForm.valid) {
      this.feedbackService.submitFeedback(this.feedbackForm.value).subscribe(
        response => {
        },
        error => {
        }
      );
    }
  }
}
