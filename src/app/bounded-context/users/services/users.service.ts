import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environments";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  baseUrl = environment.baseURLLOCAL + '/users';

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get<any>(this.baseUrl);
  }

}
