import {Component, OnInit} from '@angular/core';
import {ActivitiesService} from "../../services/activities.service";
import {Activity} from "../../models/activity.model";
import {CardActivityComponent} from "../card-activity/card-activity.component";

@Component({
  selector: 'app-grid-activities',
  standalone: true,
    imports: [
        CardActivityComponent
    ],
  templateUrl: './grid-activities.component.html',
  styleUrl: './grid-activities.component.css'
})
export class GridActivitiesComponent implements OnInit{

  activities: Activity[] = [];

  constructor(private activitiesService: ActivitiesService) {
  }

  ngOnInit(): void {
    this.getActivities();
  }

  getActivities() {
      this.activitiesService.getActivities().subscribe((res) => {
          this.activities = res;
      });
      console.log(this.activities)
  }

}
