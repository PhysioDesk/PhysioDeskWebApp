import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environments";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class FisiosServicesService {
  baseUrl: string = environment.baseURL;

  constructor(private http: HttpClient) {
  }

  getFisios(index: any): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/fisios/${index}`);
  }

}
