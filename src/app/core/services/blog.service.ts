import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { blog } from '../types/types';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private apiUrl: string = environment.apiUrl;
  

  constructor(private http: HttpClient) { }

  
    listar() {
      return this.http.get<any>('http://localhost:8080/blog');
    }
}
