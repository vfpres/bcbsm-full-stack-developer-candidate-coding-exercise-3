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

    username: string = '';
    password: string = '';
    errorMessage: string = '';

    onSubmit() {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        const body = JSON.stringify({ name: this.username, password: this.password });

        this.http.post('http://localhost:8080/api/login', body, { headers: headers })
          .subscribe(
            (user: any) => {
              console.log(user);
              sessionStorage.setItem('loggedInUsername', user.username)
              this.router.navigate(['/feedback']);
            },
            (error) => {
              console.error('Error:', error);
              this.errorMessage = 'Error logging in. Please try again.';
            }
          );
      }
}
