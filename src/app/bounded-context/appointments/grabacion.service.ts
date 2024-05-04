import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environments";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GrabacionService {
  baseUrl: string = environment.baseURL;

  constructor(private http: HttpClient) {
  }

  getGrabaciones(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/grabaciones/`);
  }

  getGrabacion(index: any) {
    return this.http.get<any>(`${this.baseUrl}/grabaciones/${index}`);
  }
}
