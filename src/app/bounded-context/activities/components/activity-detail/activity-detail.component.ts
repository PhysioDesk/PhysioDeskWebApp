import {Component, OnInit} from '@angular/core';
import {ActivitiesService} from "../../services/activities.service";
import {ActivatedRoute} from "@angular/router";
import {Activity} from "../../models/activity.model";
import {NgForOf} from "@angular/common";
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-activity-detail',
  standalone: true,
  imports: [
    NgForOf,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatIconModule
  ],
  templateUrl: './activity-detail.component.html',
  styleUrl: './activity-detail.component.css'
})
export class ActivityDetailComponent implements OnInit {

    activity !: Activity;

    constructor(private activitiesService: ActivitiesService, private route: ActivatedRoute) { }

    ngOnInit(): void {

      this.activity = {} as Activity;

      this.getActivity();
    }

    getActivity() {

        const id = this.route.snapshot.paramMap.get('id');
        this.activitiesService.getActivity(id).subscribe((res) => {
            this.activity = res;
        });
    }

    goBack() {
        window.history.back();
    }

}
