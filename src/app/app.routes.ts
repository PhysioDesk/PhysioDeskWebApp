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
  {path: 'fisios', component: FisioterapeutasPageComponent,
    children: [
      {path: '', component: FisiosTableComponent},
      {path: ':id', component: FisioDetailComponent}
    ]
  },
  {path: 'products', component: ErgonomiczonePageComponent,
    children: [
      {path: '', component: ProductsTableComponent},
      {path: 'shoppingCart', component: ShoppingCartDetailComponent},
      {path: 'paymentInformation', component: PaymentInformationComponent},
      {path: 'purchaseFinished', component: PurchaseFinishedComponent},
      {path: ':id', component: ProductsDetailComponent},
    ]
  },
  {path: 'confirmacion', component: ConfirmacionComponentComponent},
  {path: '', pathMatch: 'full', redirectTo: 'main'},
  {path: '**', pathMatch: 'full', redirectTo: 'main'}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
