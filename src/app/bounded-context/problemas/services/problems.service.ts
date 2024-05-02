import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, pipe, retry, throwError} from "rxjs";
import {ProblemModel} from "../model/Problem";

@Injectable({
  providedIn: 'root'
})
export class ProblemsService {
  baseURLLOCAL= 'http://localhost:3000/problems';

  constructor(private http:HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  getList(){
    return this.http
      .get<ProblemModel>(this.baseURLLOCAL)
      .pipe(retry(2), catchError(this.handleError));

  }

  handleError(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      console.error('An error occurred:', error.error.message);
    }
    else {
      console.error(
        // Manejo de errores devueltos por el backend
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`
      );
    }
    // Devuelven un Observable que emite un mensaje de error
    return throwError(
      'Something bad happened; please try again later.');
  }

  createItem(item:any){
    return this.http
      .post<ProblemModel>(this.baseURLLOCAL,JSON.stringify(item),this.httpOptions)
      .pipe(retry(2),catchError(this.handleError));
  }

  updateItem(id:string,item:any){
    const url = `${this.baseURLLOCAL}/${id}`;
    return this.http.put<ProblemModel>(url,JSON.stringify(item),this.httpOptions)
      .pipe(retry(2),catchError(this.handleError));
  }

  deleteItem(id:string){
    const url = `${this.baseURLLOCAL}/${id}`;
    return this.http
      .delete<ProblemModel>(url,this.httpOptions)
      .pipe(retry(2),catchError(this.handleError));
  }
}
