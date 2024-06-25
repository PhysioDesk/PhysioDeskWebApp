import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators} from '@angular/forms';
import { MatCardModule} from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatButton, MatIconButton} from "@angular/material/button";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatCardModule, MatInputModule, MatFormFieldModule, ReactiveFormsModule, MatIconModule, MatIconButton, MatButton, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent{
  @ViewChild('userForm', {static: false}) userForm!: NgForm;

  userId !: number;
  email !: string;
  password !: string;
  constructor(private router: Router) {
  }

  onSubmit(): void {
    localStorage.setItem('email', this.email.toString());
    localStorage.setItem('password', this.password.toString());
    this.router.navigateByUrl('/home');
  }

  goToRegister(): void {

    this.router.navigateByUrl('/register');

  }

}
