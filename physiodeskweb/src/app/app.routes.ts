import {RouterModule, Routes} from '@angular/router';
import {NgModule} from "@angular/core";
import {MainContainerComponent} from "./components/main-container/main-container.component";
import {PersonalDataContainerComponent} from "./components/personal-data-container/personal-data-container.component";
import {ProblemContainerComponent} from "./components/problem-container/problem-container.component";
import {FisiosTableComponent} from "./fisioterapeutas/components/fisios-table/fisios-table.component";
import {FisioterapeutasPageComponent} from "./components/fisioterapeutas-page/fisioterapeutas-page.component";
import {ErgonomiczonePageComponent} from "./components/ergonomiczone-page/ergonomiczone-page.component";
import {ProductsDetailComponent} from "./products/components/products-detail/products-detail.component";
import {ProductsTableComponent} from "./products/components/products-table/products-table.component";
import {FisioDetailComponent} from "./fisioterapeutas/components/fisio-detail/fisio-detail.component";
import {ConfirmacionComponentComponent} from "./fisioterapeutas/components/ConfirmacionComponent/confirmacion-component.component";
import {AddProblemContainerComponent} from "./components/add-problem-container/add-problem-container.component";
import {ProblemasTableComponent} from "./problemas/components/problemas-table/problemas-table.component";
import {AppointmentsPageComponent} from "./components/appointments-page/appointments-page.component";

export const routes: Routes = [
  { path: 'home', component: MainContainerComponent },
  { path: 'personalData', component: PersonalDataContainerComponent },
  { path: 'problemsEdit', component: AddProblemContainerComponent,
    children: [
      {path:'',component: ProblemasTableComponent},
    ]},
  { path: 'problems', component: ProblemContainerComponent ,
    children: [
      {path:'',component: ProblemasTableComponent},
    ]},
  { path: 'fisios', component: FisioterapeutasPageComponent,
    children: [
      { path: '', component: FisiosTableComponent },
      { path: ':id', component: FisioDetailComponent }
    ]
  },

  { path: 'products', component: ErgonomiczonePageComponent,
    children: [
      { path: '', component: ProductsTableComponent },
      { path: ':id', component: ProductsDetailComponent }
    ]
  },

  { path: 'confirmacion', component: ConfirmacionComponentComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },

  {path: 'appointments', component: AppointmentsPageComponent},
  {path: '', component: AppointmentsPageComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
