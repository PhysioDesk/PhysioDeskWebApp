import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environments";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {stringify} from "node:querystring";

@Injectable({
  providedIn: 'root'
})
export class AppointmentsService {

  baseUrl = environment.baseURL + "/appointments";

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  getAppointments(userId: any) {
    return this.http.get<any>(this.baseUrl + "/patient/{patientId}?patientId=" + userId);
  }

  createAppointment(appointment: any) {
    console.log(JSON.stringify(appointment));
    return this.http.post<any>(this.baseUrl, JSON.stringify(appointment), this.httpOptions);
  }
}
