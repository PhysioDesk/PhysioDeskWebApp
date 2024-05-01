import { Component } from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-payment-information',
  standalone: true,
    imports: [
        MatButton,
        FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule
    ],
  templateUrl: './payment-information.component.html',
  styleUrl: './payment-information.component.css'
})
export class PaymentInformationComponent {
    emailFormControl = new FormControl('', [Validators.required, Validators.email]);
}
