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

  listar(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/blog`)
      .pipe(
        catchError(error => {
          // Handle error
          return throwError(error);
        })
      );
  }
}
