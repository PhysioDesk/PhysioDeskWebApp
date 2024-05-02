import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environments";

@Injectable({
  providedIn: 'root'
})

export class FisiosServicesService {
  baseUrl: string = environment.baseURL;

  constructor(private http: HttpClient) {
  }

  getFisios(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/fisios/`);
  }

  getFisio(index: any) {
    return this.http.get<any>(`${this.baseUrl}/fisios/${index}`);
  }

}
