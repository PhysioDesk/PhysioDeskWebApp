import { Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-config-notifications-page',
  standalone: true,
  imports: [MatSelectModule, MatButtonModule, MatIconModule, MatInputModule, FormsModule, ReactiveFormsModule, NgForOf],
  templateUrl: './config-notifications-page.component.html',
  styleUrl: './config-notifications-page.component.css'
})
export class ConfigNotificationsPageComponent {

  constructor() {
    this.loadNotifications();
  }

  notifications: any[] = [];

  hours: number[] = Array.from({length: 24}, (_, i) => i);  // 0 to 23 hours
  minutes: number[] = Array.from({length: 60}, (_, i) => i);  // 0 to 59 minutes

  loadNotifications(): void {
    const storedNotifications = localStorage.getItem('notifications');
    if (storedNotifications) {
      this.notifications = JSON.parse(storedNotifications);
    }
  }

  addNotification(hour: number, minute: number): void {
    const time = `${hour}h ${minute}m remaining`;
    this.notifications.push({ id: this.notifications.length + 1, time: time });
    this.saveNotifications();
  }

  saveNotifications(): void {
    localStorage.setItem('notifications', JSON.stringify(this.notifications));
  }

  deleteNotification(id: number): void {
    this.notifications = this.notifications.filter(notification => notification.id !== id);
    this.saveNotifications();
  }

}
