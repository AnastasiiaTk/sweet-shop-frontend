import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './navigation/home/home.component';
import {CategoryTreeComponent} from './navigation/category-tree/category-tree.component';
import {LoginComponent} from './navigation/login/login.component';
import {RegistrationComponent} from './navigation/registration/registration.component';
import {ManageProductsComponent} from './navigation/manage-products/manage-products.component';
import {CatalogueComponent} from './navigation/catalogue/catalogue.component';
import {ProductDetailsComponent} from './navigation/catalogue/product-details/product-details.component';
import {BasketComponent} from './navigation/basket/basket.component';
import {UserOrdersComponent} from './navigation/user-orders/user-orders.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'categoryTree', component: CategoryTreeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'manageProducts', component: ManageProductsComponent},
  {path: 'catalogue', component: CatalogueComponent},
  {path: 'product-details/:productId', component: ProductDetailsComponent},
  {path: 'basket', component: BasketComponent},
  {path: 'userOrders', component: UserOrdersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
