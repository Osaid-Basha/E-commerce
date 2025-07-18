import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  getResetEmail(email: string) {
    throw new Error('Method not implemented.');
  }

  private apiUrl = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) { }

  register(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, data);
  }

  login(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, data);
  }

  sendResetCode(email: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/send-reset-code`, { email });
  }

  verifyResetCode(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/verify-reset-code`, data);
  }

  changePassword(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/change-password`, data);
  }
}
