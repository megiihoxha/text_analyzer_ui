import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TextAnalysisService {
  private apiUrlAnalyze = 'http://localhost:8000/api/analyze/';
  private apiUrlHistory = 'http://localhost:8000/api/history/';

  constructor(private http: HttpClient, private authService: AuthService) { }

  analyzeText(text: string): Observable<any> {
    const token = this.authService.getToken();
    if (!token) {
      throw new Error('No token available');
    }

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    return this.http.post<any>(this.apiUrlAnalyze, { text }, { headers });
  }

  getHistory(): Observable<any> {
    const token = this.authService.getToken();
    if (!token) {
      throw new Error('No token available');
    }

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    return this.http.get<any>(this.apiUrlHistory, { headers });
  }
}
