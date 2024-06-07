import {RouterModule, Routes} from '@angular/router';
import {NgModule} from "@angular/core";
import {MainContainerComponent} from "./pages/main-container/main-container.component";
import {PersonalDataContainerComponent} from "./pages/personal-data-container/personal-data-container.component";
import {ProblemContainerComponent} from "./pages/problem-container/problem-container.component";
import {FisioterapeutasPageComponent} from "./pages/fisioterapeutas-page/fisioterapeutas-page.component";
import {ErgonomiczonePageComponent} from "./pages/ergonomiczone-page/ergonomiczone-page.component";

import {AddProblemContainerComponent} from "./pages/add-problem-container/add-problem-container.component";
import {
  ProblemasTableComponent
} from "./bounded-context/problemas/components/problemas-table/problemas-table.component";
import {
  FisiosTableComponent
} from "./bounded-context/fisioterapeutas/components/fisios-table/fisios-table.component";
import {FisioDetailComponent} from "./bounded-context/fisioterapeutas/components/fisio-detail/fisio-detail.component";
import {ProductsTableComponent} from "./bounded-context/products/components/products-table/products-table.component";
import {ProductsDetailComponent} from "./bounded-context/products/components/products-detail/products-detail.component";
import {ShoppingCartDetailComponent} from "./bounded-context/products/components/shopping-cart-detail/shopping-cart-detail.component";
import {PaymentInformationComponent} from "./bounded-context/products/components/payment-information/payment-information.component";
import {PurchaseFinishedComponent} from "./bounded-context/products/components/purchase-finished/purchase-finished.component";
import {
  ConfirmacionComponentComponent
} from "./bounded-context/fisioterapeutas/components/ConfirmacionComponent/confirmacion-component.component";
import {LandingPageComponent} from "./pages/landing-page/landing-page/landing-page.component";
import {AppointmentsPageComponentComponent} from "./pages/appointments-page/appointments-page.component.component";
import {
  AppointTableComponentComponent
} from "./bounded-context/appointments/components/appoint-table.component/appoint-table.component.component";
import {TheActivitiesPageComponent} from "./pages/activities-page/the-activities-page/the-activities-page.component";
import {
  GridActivitiesComponent
} from "./bounded-context/activities/components/grid-activities/grid-activities.component";
import {
  ActivityDetailComponent
} from "./bounded-context/activities/components/activity-detail/activity-detail.component";
import {ConfigNotificationsPageComponent} from "./pages/config-notifications-page/config-notifications-page.component";
import {NotificationsPageComponent} from "./pages/notifications-page/notifications-page.component";


export const routes: Routes = [

  {path: 'main',component: LandingPageComponent},
  {path: 'home',component: MainContainerComponent},
  {path: 'personalData',component:PersonalDataContainerComponent },
  { path: 'problemsEdit', component: AddProblemContainerComponent,
    children: [
      {path:'',component: ProblemasTableComponent},
    ]},
  { path: 'problems', component: ProblemContainerComponent ,
    children: [
      {path:'', component: ProblemasTableComponent},
    ]},
  { path: 'appointments', component: AppointmentsPageComponentComponent },
  {path: 'fisios', component: FisioterapeutasPageComponent,
    children: [
      {path: '', component: FisiosTableComponent},
      {path: ':id', component: FisioDetailComponent}
    ]
  },
  { path: 'activities', component: TheActivitiesPageComponent,
    children: [
        {path: '', component: GridActivitiesComponent},
      {path: ':id', component: ActivityDetailComponent}
    ]},
  {path: 'products', component: ErgonomiczonePageComponent,
    children: [
      {path: '', component: ProductsTableComponent},
      {path: 'shoppingCart', component: ShoppingCartDetailComponent},
      {path: 'paymentInformation', component: PaymentInformationComponent},
      {path: 'purchaseFinished', component: PurchaseFinishedComponent},
      {path: ':id', component: ProductsDetailComponent},
    ]
  },
  {path: 'config-notifications', component: ConfigNotificationsPageComponent},
  {path: 'notifications', component: NotificationsPageComponent},
  {path: 'confirmacion', component: ConfirmacionComponentComponent},
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
