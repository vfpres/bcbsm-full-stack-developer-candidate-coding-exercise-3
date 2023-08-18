import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { FeedbackService } from '../../feedback.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-feedback-submit',
  templateUrl: './feedback-submit.component.html'
})
export class FeedbackSubmitComponent implements OnInit {

  feedbackForm!: FormGroup;

  constructor(private fb: FormBuilder, private feedbackService: FeedbackService, private router: Router) { }

  ngOnInit(): void {
    this.feedbackForm = this.fb.group({
      rating_value: ['', Validators.required],
      comment: [''],
      username: ['']
    });
  }

  submitFeedback() {
    console.log(sessionStorage.getItem('loggedInUsername'));
    this.feedbackForm.get('username')?.setValue(sessionStorage.getItem('loggedInUsername'));
    console.log(this.feedbackForm.get('username')?.getRawValue());
    if (this.feedbackForm.valid) {
      this.feedbackService.submitFeedback(this.feedbackForm.value).subscribe(
        response => {
            this.router.navigate(['/feedback-list']);
        },
        error => {
        }
      );
    }
  }
}
