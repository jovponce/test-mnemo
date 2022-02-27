import { Injectable } from '@angular/core';

import { retry, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//Environment
import { environment } from 'src/environments/environment';

//Models
import { Response } from 'src/app/models/response';
import { FilmDetail } from 'src/app/models/film-detail';

@Injectable({
  providedIn: 'root'
})
export class ApiStarWarsService {

  //public list = 'films/';

  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  

  constructor( private http: HttpClient ) { }

  getlist(): Observable<Response>{
    const url = `${environment.urlapi}films/`;
    return this.http.get<Response>(url,this.httpHeader)
    .pipe(
      retry(1),
      catchError(this.error)
    );
  }

  getDetail(id:number): Observable<FilmDetail>{
    const url = `${environment.urlapi}films/${id}/`;
    return this.http.get<FilmDetail>(url,this.httpHeader)
    .pipe(
      retry(1),
      catchError(this.error)
    );
  }

  getStarships(url:string): Observable<any>{
    return this.http.get<FilmDetail>(url,this.httpHeader)
    .pipe(
      retry(1),
      catchError(this.error)
    );
  }

  error(err) {
    let message = '';
    if(err.error instanceof ErrorEvent) {
     message = err.error.message;
    } else {
     message = `Error Code: ${err.status}\nMessage: ${err.message}`;
    }
    console.log(message);
    return throwError(message);
 }

}
