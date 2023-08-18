import { Component, OnInit } from '@angular/core';
import { FeedbackService } from '../../feedback.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-feedback-list',
  templateUrl: './feedback-list.component.html',
})
export class FeedbackListComponent implements OnInit {

  feedbacks: any[] = [];
  username: string | null = '';

  constructor(private feedbackService: FeedbackService, private router: Router) { }

  ngOnInit(): void {
    this.username = sessionStorage.getItem('loggedInUsername');
    this.fetchFeedbacks();
  }

  fetchFeedbacks(): void {
    let safeUsername: string;
    if (this.username !== null) {
      safeUsername = this.username;
    } else {
      safeUsername = 'DefaultUsername';
    }
    this.feedbackService.getUserFeedback(safeUsername).subscribe(
      data => {
        this.feedbacks = data
        console.log(data);
      },
      error => console.error('Error fetching feedbacks:', error)
    );
  }

  navigateToSubmit() {
    this.router.navigate(['/feedback-submit']);
  }
}
