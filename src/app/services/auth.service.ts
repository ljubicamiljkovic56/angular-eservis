import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private headers = new HttpHeaders({'Content-Type': 'application/json;charset=UTF-8'});

  private baseURL = "http://localhost:8080/api/users";
 
  constructor(private httpClient: HttpClient) { }

  login(auth: any): Observable<any> {
    return this.httpClient.post(`${this.baseURL}/loginUser`, {username: auth.username, password: auth.password},  {headers: this.headers,responseType: 'json'});
  }

  isLoggedIn(): boolean {
		if (!localStorage.getItem('username')) {
				return false;
		}
		return true;
	}
}
