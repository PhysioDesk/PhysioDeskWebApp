import {Component, Input} from '@angular/core';
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule} from "@angular/material/button";
import {Router} from "@angular/router";

@Component({
  selector: 'app-card-activity',
  standalone: true,
  imports: [MatCardModule, MatIconModule, MatButtonModule],
  templateUrl: './card-activity.component.html',
  styleUrl: './card-activity.component.css'
})
export class CardActivityComponent {

  constructor(private router: Router) {
  }

  @Input() activity: any;

  goToDetails() {
    this.router.navigateByUrl(`/activities/${this.activity.id}`);
  }

}
