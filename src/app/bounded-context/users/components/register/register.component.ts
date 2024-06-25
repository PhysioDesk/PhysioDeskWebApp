import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators} from '@angular/forms';
import { MatCardModule} from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatButton, MatIconButton} from "@angular/material/button";
import {User} from "../../models/user.model";
import {UsersService} from "../../services/users.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [MatCardModule, MatInputModule, MatFormFieldModule, ReactiveFormsModule, MatIconModule, MatIconButton, MatButton, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  @ViewChild('userForm', {static: false}) userForm!: NgForm;

  userData!: User;

  constructor(private usersService: UsersService, private router: Router) {
    this.userData = {} as User;
  }

  saveUser() {
    this.usersService.createUser(this.userData).subscribe(() => {
      this.userData = {} as User;
      this.userForm.resetForm();
    });
    this.router.navigateByUrl('/login')
  }
}
