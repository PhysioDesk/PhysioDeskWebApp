import {Component, OnInit, ViewChild} from '@angular/core';
import {SidebarComponent} from "../../public/sidebar/sidebar.component";
import {
  FisiosTableComponent
} from "../../bounded-context/fisioterapeutas/components/fisios-table/fisios-table.component";
import {User} from "../../bounded-context/users/models/user.model";
import {UsersService} from "../../bounded-context/users/services/users.service";
import {Router} from "@angular/router";
import {MatAnchor, MatButton} from "@angular/material/button";
import {FormsModule, NgForm} from "@angular/forms";
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";

@Component({
  selector: 'app-personal-data-container',
  standalone: true,
    imports: [
        SidebarComponent,
        FisiosTableComponent,
        MatAnchor,
        FormsModule,
        MatFormField,
        MatInput,
        MatButton
    ],
  templateUrl: './personal-data-container.component.html',
  styleUrl: './personal-data-container.component.css'
})
export class PersonalDataContainerComponent implements OnInit{

    @ViewChild('userForm', {static: false}) userForm!: NgForm;
    user !: any;

    constructor(private router: Router, private usersService: UsersService) {
        this.user = {}  as User;
        const navigation = this.router.getCurrentNavigation();
        if (navigation?.extras?.state) {
            this.user = navigation.extras.state['user'];
        }
    }

    ngOnInit(): void {
        console.log(this.user); // Aquí tienes el objeto usuario
    }

    updateUser() {
        this.usersService.updateUser(this.user).subscribe((user) => {
            console.log(user);
        });
    }

}
