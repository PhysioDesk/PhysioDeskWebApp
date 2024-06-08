import { Component } from '@angular/core';
import {UserTableComponent} from "../../bounded-context/users/components/user-table/user-table.component";

@Component({
  selector: 'app-users-list-page',
  standalone: true,
  imports: [
    UserTableComponent
  ],
  templateUrl: './users-list-page.component.html',
  styleUrl: './users-list-page.component.css'
})
export class UsersListPageComponent {

}
