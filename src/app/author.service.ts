import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private http: HttpClient) {}


    getAuthorsList() {
      return this.http.get('https://625dc3ef4c36c753577995e4.mockapi.io/authors')
    }



}
