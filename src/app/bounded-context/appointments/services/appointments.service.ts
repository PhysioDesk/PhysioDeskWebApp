import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environments";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AppointmentsService {

  baseUrl = environment.baseURLLOCAL + "/appointments";

  constructor(private http: HttpClient) { }

  getAppointments() {
    return this.http.get<any>(this.baseUrl);
  }
}
