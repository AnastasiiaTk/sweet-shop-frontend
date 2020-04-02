import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {HomeComponent} from './navigation/home/home.component';
import {CategoryTreeComponent} from './navigation/category-tree/category-tree.component';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ModalModule} from 'ngx-bootstrap';
import {LoginComponent} from './navigation/login/login.component';
import {HttpModule} from '@angular/http';
import {RegistrationComponent} from './navigation/registration/registration.component';
import {JwtModule} from '@auth0/angular-jwt';
import {ManageProductsComponent} from './navigation/manage-products/manage-products.component';
import {CatalogueComponent} from './navigation/catalogue/catalogue.component';
import {ProductDetailsComponent} from './navigation/catalogue/product-details/product-details.component';
import { BasketComponent } from './navigation/basket/basket.component';
import { UserOrdersComponent } from './navigation/user-orders/user-orders.component';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';

export function jwtTokenGetter() {
  return localStorage.getItem('access_token');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CategoryTreeComponent,
    LoginComponent,
    RegistrationComponent,
    ManageProductsComponent,
    CatalogueComponent,
    ProductDetailsComponent,
    BasketComponent,
    UserOrdersComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    HttpModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: jwtTokenGetter
      }
    }),
    NgbPaginationModule],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
