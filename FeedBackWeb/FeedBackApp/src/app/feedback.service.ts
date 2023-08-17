import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  private apiUrl = 'http://localhost:8080/api/feedback';

  constructor(private http: HttpClient) { }

  submitFeedback(feedbackData: { rating_value: number, comment: string }): Observable<any> {
    return this.http.post(this.apiUrl, feedbackData);
  }

  getUserFeedback(userName: string): Observable<any> {
    return this.http.get(`${this.apiUrl}?user=${userName}`);
  }

}
