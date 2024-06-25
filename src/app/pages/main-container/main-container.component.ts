import {Component, ViewEncapsulation} from '@angular/core';
import {SidebarComponent} from "../../public/sidebar/sidebar.component";
import {RouterOutlet, Router, NavigationEnd, ActivatedRoute, NavigationExtras} from "@angular/router";
import {OnInit} from "@angular/core";
import {NgIf} from "@angular/common";
import {CardWelcomeComponent} from "../../public/card-welcome/card-welcome.component";
import {PersonalDataContainerComponent} from "../personal-data-container/personal-data-container.component";
import {ProblemContainerComponent} from "../problem-container/problem-container.component";
import {
  FisiosTableComponent
} from "../../bounded-context/fisioterapeutas/components/fisios-table/fisios-table.component";
import {UsersService} from "../../bounded-context/users/services/users.service";
import {User} from "../../bounded-context/users/models/user.model";

@Component({
  selector: 'app-main-container',
  standalone: true,
    imports: [
        SidebarComponent,
        RouterOutlet,
        NgIf,
        CardWelcomeComponent,
        PersonalDataContainerComponent,
        ProblemContainerComponent,
        FisiosTableComponent
    ],
  templateUrl: './main-container.component.html',
  styleUrl: './main-container.component.css',

})
export class MainContainerComponent implements OnInit {

    userId !: number;
    email !: string;
    user !: User;
    password !: string;

  rutaActual: string='';
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private usersService: UsersService) { }
  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.rutaActual = event.url;
      }
    });

    this.user = {} as User;
    var strEmail = localStorage.getItem("email");
    var strPassword = localStorage.getItem("password");

    if (strEmail && strPassword) {
      this.email = strEmail;
      this.password = strPassword;
      console.log(`Email: ${this.email}, Password: ${this.password}`);
      this.getUserbyEmailAndPassword();
    } else {
      // Manejar el caso cuando email o password no están definidos en localStorage
      console.error('Email or Password not found in localStorage');
      // Puedes redirigir al usuario a la página de inicio de sesión
      this.router.navigateByUrl('/login');
    }
  }


  getUser() {
      this.usersService.getUser(this.userId).subscribe((data: any) => {
          this.user = data;
      });
  }

  getUserbyEmail() {
    this.usersService.getUserByEmail(this.email).subscribe((data: any) => {
      this.user = data;
    });
  }

  getUserbyEmailAndPassword() {
    this.usersService.getUserByEmailAndPassword(this.email, this.password).subscribe((data: any) => {
      this.user = data;
    });

  }

  goToDetail() {

      const navigationExtras: NavigationExtras= {
          state: {
              user: this.user
          }
      }

    this.router.navigate(['/personalData'], navigationExtras);
  }


}
