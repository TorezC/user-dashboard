import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = environment.BASE_URL;

  public header() {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    return headers;
  }

  constructor(private httpClient: HttpClient) { }

  getUsers(page: number): Observable<any>{
    return this.httpClient.get(`${this.baseUrl}?page=${page}`, {headers: this.header()})
  }

  getUserById(id: number): Observable<any>{
    return this.httpClient.get(`${this.baseUrl}/${id}`, {headers: this.header()})
  }

}
