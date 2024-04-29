import {RouterModule, Routes} from '@angular/router';
import {NgModule} from "@angular/core";
import {MainContainerComponent} from "./components/main-container/main-container.component";
import {PersonalDataContainerComponent} from "./components/personal-data-container/personal-data-container.component";
import {ProblemContainerComponent} from "./components/problem-container/problem-container.component";
import {FisiosTableComponent} from "./fisioterapeutas/components/fisios-table/fisios-table.component";
import {FisioterapeutasPageComponent} from "./components/fisioterapeutas-page/fisioterapeutas-page.component";


export const routes: Routes = [

  {path: 'home',component: MainContainerComponent},
  {path: 'personalData',component:PersonalDataContainerComponent },
  {path: 'problems',component:ProblemContainerComponent },
  {path: 'fisios', component: FisioterapeutasPageComponent},
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
