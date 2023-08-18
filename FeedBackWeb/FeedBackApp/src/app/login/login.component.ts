import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private http: HttpClient, private router: Router) { }

    name: string = '';
    password: string = '';
    errorMessage: string = '';

    onSubmit() {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        const body = JSON.stringify({ name: this.name, password: this.password });
        console.log("name ->"+this.name);
        console.log("name ->"+this.password);
        console.log(body);
        this.http.post('http://localhost:8080/api/auth/login', body, { headers: headers })
          .subscribe(
            (user: any) => {
              console.log(user);
              sessionStorage.setItem('loggedInUsername', this.name)
              this.router.navigate(['/feedback-submit']);
            },
            (error) => {
              console.error('Error:', error);
              this.errorMessage = 'Error logging in. Please try again.';
            }
          );
      }
}
