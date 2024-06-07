import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environments";

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {

    baseUrl = environment.baseURL + "/ejercicios";

  constructor(private http: HttpClient) { }

  getActivities() {
    return this.http.get<any>(this.baseUrl);
  }

  getActivity(id: any) {
      return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

}
