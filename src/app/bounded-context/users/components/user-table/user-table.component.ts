import {Component, OnInit} from '@angular/core';
import {
  MatTableDataSource, MatTableModule
} from "@angular/material/table";
import {User} from "../../models/user.model";
import {UsersService} from "../../services/users.service";

@Component({
  selector: 'app-user-table',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './user-table.component.html',
  styleUrl: './user-table.component.css'
})
export class UserTableComponent implements OnInit {

  displayedColumns: string[] = ['name', 'lastname', 'phone', 'email', 'address', 'city','password'];

  data: any[] = [];

  dataSource= new MatTableDataSource<any>(this.data);

  constructor(private usersService: UsersService) {
  }

  ngOnInit() {
    this.getUsers();
  }

    getUsers() {
        this.usersService.getUsers().subscribe(
        (res) => {
            this.dataSource.data = res;
        },
        (error) => {
            console.log(error);
        }
        );
    }

}
