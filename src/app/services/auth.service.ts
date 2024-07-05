import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

interface SignupResponse {
  token: string;
}

interface LoginResponse {
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private signupApiUrl = 'http://localhost:8000/api/register/';
  private loginApiUrl = 'http://localhost:8000/api/login/';

  constructor(private http: HttpClient) {}

  signup(username: string, password: string): Observable<SignupResponse> {
    const body = { username, password };
    return this.http.post<SignupResponse>(this.signupApiUrl, body).pipe(
      tap(response => {
        localStorage.setItem('token', response.token);
      })
    );
  }

  login(username: string, password: string): Observable<LoginResponse> {
    const body = { username, password };
    return this.http.post<LoginResponse>(this.loginApiUrl, body).pipe(
      tap(response => {
        localStorage.setItem('token', response.token);
      })
    );
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }
}
