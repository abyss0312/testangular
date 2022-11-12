import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Inject, Injectable, SkipSelf } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { EnvironmentConfig, ENV_CONFIG } from './environment-config.interface';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private apiUrl: string;

  constructor(@Inject(ENV_CONFIG) private config: EnvironmentConfig,  private http: HttpClient) {
    this.apiUrl = `${config.environment.baseUrl}`;
  }

  private handleError(error: HttpErrorResponse) {
   
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  getAll<T>(path: string): Observable<T> {
    return this.http.get<T>(`${this.apiUrl}${path}`).pipe(
      catchError(this.handleError)
    );
  }

  postOne<T>(path: string, body:any): Observable<T> {
    return this.http.post<T>(`${this.apiUrl}${path}`,body).pipe(
      catchError(this.handleError)
    );
  }
  
}
