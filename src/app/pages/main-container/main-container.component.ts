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
    user !: User;

  rutaActual: string='';
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private usersService: UsersService) { }
  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.rutaActual = event.url;
      }
    });
    this.user = {}  as User;
    var strId = localStorage.getItem('user_id');
    this.userId = parseInt(strId ? strId : '0');
    console.log(this.userId);
    this.getUser();
  }


  getUser() {
      this.usersService.getUser(this.userId).subscribe((data: any) => {
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
