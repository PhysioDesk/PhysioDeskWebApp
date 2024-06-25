import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../../environments/environments";
import {Observable} from "rxjs";
import {User} from "../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  baseUrl = environment.baseURL + '/users';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  getUsers(){
    return this.http.get<any>(this.baseUrl);
  }

  getUser(id: number) {
    return this.http.get<any>(this.baseUrl + '/' + id);
  }

  createUser(item: User) : Observable<User> {
    console.log(JSON.stringify(item))
    return this.http.post<User>(this.baseUrl, JSON.stringify(item), this.httpOptions);
  }

  updateUser(item: User) : Observable<User> {
    console.log(JSON.stringify(item));
    return this.http.put<User>(this.baseUrl + '/' + item.id, JSON.stringify(item), this.httpOptions);
  }

}
