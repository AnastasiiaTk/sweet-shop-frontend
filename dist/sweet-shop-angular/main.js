(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _navigation_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navigation/home/home.component */ "./src/app/navigation/home/home.component.ts");
/* harmony import */ var _navigation_category_tree_category_tree_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navigation/category-tree/category-tree.component */ "./src/app/navigation/category-tree/category-tree.component.ts");
/* harmony import */ var _navigation_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navigation/login/login.component */ "./src/app/navigation/login/login.component.ts");
/* harmony import */ var _navigation_registration_registration_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navigation/registration/registration.component */ "./src/app/navigation/registration/registration.component.ts");
/* harmony import */ var _navigation_manage_products_manage_products_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./navigation/manage-products/manage-products.component */ "./src/app/navigation/manage-products/manage-products.component.ts");
/* harmony import */ var _navigation_catalogue_catalogue_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./navigation/catalogue/catalogue.component */ "./src/app/navigation/catalogue/catalogue.component.ts");
/* harmony import */ var _navigation_catalogue_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./navigation/catalogue/product-details/product-details.component */ "./src/app/navigation/catalogue/product-details/product-details.component.ts");
/* harmony import */ var _navigation_basket_basket_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./navigation/basket/basket.component */ "./src/app/navigation/basket/basket.component.ts");
/* harmony import */ var _navigation_user_orders_user_orders_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./navigation/user-orders/user-orders.component */ "./src/app/navigation/user-orders/user-orders.component.ts");












var routes = [
    { path: 'home', component: _navigation_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'categoryTree', component: _navigation_category_tree_category_tree_component__WEBPACK_IMPORTED_MODULE_4__["CategoryTreeComponent"] },
    { path: 'login', component: _navigation_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: 'registration', component: _navigation_registration_registration_component__WEBPACK_IMPORTED_MODULE_6__["RegistrationComponent"] },
    { path: 'manageProducts', component: _navigation_manage_products_manage_products_component__WEBPACK_IMPORTED_MODULE_7__["ManageProductsComponent"] },
    { path: 'catalogue', component: _navigation_catalogue_catalogue_component__WEBPACK_IMPORTED_MODULE_8__["CatalogueComponent"] },
    { path: 'product-details/:productId', component: _navigation_catalogue_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_9__["ProductDetailsComponent"] },
    { path: 'basket', component: _navigation_basket_basket_component__WEBPACK_IMPORTED_MODULE_10__["BasketComponent"] },
    { path: 'userOrders', component: _navigation_user_orders_user_orders_component__WEBPACK_IMPORTED_MODULE_11__["UserOrdersComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex\" id=\"wrapper\">\r\n  <div class=\"bg-light border-right font-class\" id=\"sidebar-wrapper\">\r\n    <div class=\"sidebar-heading\">Sweeeeeeet Shooooop</div>\r\n    <div class=\"list-group list-group-flush\">\r\n      <a href=\"categoryTree\" class=\"list-group-item list-group-item-action bg-light\" *ngIf=\"isAdmin()\">Category Tree</a>\r\n      <a href=\"manageProducts\" class=\"list-group-item list-group-item-action bg-light\" *ngIf=\"isAdmin()\">Manage\r\n        Products</a>\r\n      <a href=\"/catalogue\" class=\"list-group-item list-group-item-action bg-light\">Catalogue</a>\r\n      <a href=\"/userOrders\" class=\"list-group-item list-group-item-action bg-light\" *ngIf=\"isAuthenticated()\">My\r\n        Orders</a>\r\n      <a href=\"/home\" class=\"list-group-item list-group-item-action bg-light\">Discounts</a>\r\n      <a href=\"/home\" class=\"list-group-item list-group-item-action bg-light\">Delivery and Payment</a>\r\n      <a href=\"/home\" class=\"list-group-item list-group-item-action bg-light\">About Us</a>\r\n    </div>\r\n  </div>\r\n  <div id=\"page-content-wrapper\">\r\n    <nav class=\"navbar navbar-expand-lg navbar-light bg-light border-bottom\">\r\n      <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n        <ul class=\"navbar-nav ml-auto mt-2 mt-lg-0\">\r\n          <li class=\"nav-item active\">\r\n            <a href=\"/basket\" class=\"nav-link\">\r\n              <span id=\"itemCount\" class=\"font-class\">{{getBasketItemsAmount()}}</span>\r\n              Basket\r\n            </a>\r\n          </li>\r\n          <li class=\"nav-item active\">\r\n            <a href=\"/home\" class=\"nav-link\">&nbsp;Home</a>\r\n          </li>\r\n          <li class=\"nav-item active\" *ngIf=\"!isAuthenticated()\">\r\n            <a href=\"/registration\" class=\"nav-link\">Registration</a>\r\n          </li>\r\n          <li class=\"nav-item active\" *ngIf=\"!isAuthenticated()\">\r\n            <a href=\"login\" style=\"text-decoration: none;\">\r\n              <input class=\"nav-link btn btn-primary btn-sm add-category-btn\" type=\"button\" value=\"Log In\"/>\r\n            </a>\r\n          </li>\r\n          <li class=\"nav-item active\" *ngIf=\"isAuthenticated()\">\r\n            <span id=\"loggedInUsername\" class=\"nav-link\">Current User:&nbsp;{{getCurrentUsername()}}</span>\r\n          </li>\r\n          <li class=\"nav-item active\" *ngIf=\"isAuthenticated()\">\r\n            <input class=\"nav-link btn btn-primary btn-sm add-category-btn\" type=\"submit\" value=\"Log Out\"\r\n                   (click)=\"logout()\"/>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </nav>\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service/user.service */ "./src/app/service/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _global_properties__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./global-properties */ "./src/app/global-properties.ts");





var AppComponent = /** @class */ (function () {
    function AppComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.title = 'sweet-shop-angular';
    }
    AppComponent.prototype.logout = function () {
        this.userService.logout();
        this.router.navigate(['/login']);
    };
    AppComponent.prototype.isAdmin = function () {
        return this.userService.isAdmin();
    };
    AppComponent.prototype.isAuthenticated = function () {
        if (localStorage.getItem(_global_properties__WEBPACK_IMPORTED_MODULE_4__["TOKEN_NAME"])) {
            return true;
        }
        return false;
    };
    AppComponent.prototype.getCurrentUsername = function () {
        return this.userService.getCurrentUsername();
    };
    AppComponent.prototype.getBasketItemsAmount = function () {
        return localStorage.getItem(_global_properties__WEBPACK_IMPORTED_MODULE_4__["BASKET_ITEMS_AMOUNT"]);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: jwtTokenGetter, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jwtTokenGetter", function() { return jwtTokenGetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _navigation_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navigation/home/home.component */ "./src/app/navigation/home/home.component.ts");
/* harmony import */ var _navigation_category_tree_category_tree_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./navigation/category-tree/category-tree.component */ "./src/app/navigation/category-tree/category-tree.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _navigation_login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./navigation/login/login.component */ "./src/app/navigation/login/login.component.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _navigation_registration_registration_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./navigation/registration/registration.component */ "./src/app/navigation/registration/registration.component.ts");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _navigation_manage_products_manage_products_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./navigation/manage-products/manage-products.component */ "./src/app/navigation/manage-products/manage-products.component.ts");
/* harmony import */ var _navigation_catalogue_catalogue_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./navigation/catalogue/catalogue.component */ "./src/app/navigation/catalogue/catalogue.component.ts");
/* harmony import */ var _navigation_catalogue_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./navigation/catalogue/product-details/product-details.component */ "./src/app/navigation/catalogue/product-details/product-details.component.ts");
/* harmony import */ var _navigation_basket_basket_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./navigation/basket/basket.component */ "./src/app/navigation/basket/basket.component.ts");
/* harmony import */ var _navigation_user_orders_user_orders_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./navigation/user-orders/user-orders.component */ "./src/app/navigation/user-orders/user-orders.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");























function jwtTokenGetter() {
    return localStorage.getItem('access_token');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _navigation_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _navigation_category_tree_category_tree_component__WEBPACK_IMPORTED_MODULE_7__["CategoryTreeComponent"],
                _navigation_login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"],
                _navigation_registration_registration_component__WEBPACK_IMPORTED_MODULE_15__["RegistrationComponent"],
                _navigation_manage_products_manage_products_component__WEBPACK_IMPORTED_MODULE_17__["ManageProductsComponent"],
                _navigation_catalogue_catalogue_component__WEBPACK_IMPORTED_MODULE_18__["CatalogueComponent"],
                _navigation_catalogue_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_19__["ProductDetailsComponent"],
                _navigation_basket_basket_component__WEBPACK_IMPORTED_MODULE_20__["BasketComponent"],
                _navigation_user_orders_user_orders_component__WEBPACK_IMPORTED_MODULE_21__["UserOrdersComponent"]
            ],
            entryComponents: [],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_12__["ModalModule"].forRoot(),
                _angular_http__WEBPACK_IMPORTED_MODULE_14__["HttpModule"],
                _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_16__["JwtModule"].forRoot({
                    config: {
                        tokenGetter: jwtTokenGetter
                    }
                }),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_22__["NgbPaginationModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dto/OrderItemDTO.ts":
/*!*************************************!*\
  !*** ./src/app/dto/OrderItemDTO.ts ***!
  \*************************************/
/*! exports provided: OrderItemDTO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderItemDTO", function() { return OrderItemDTO; });
var OrderItemDTO = /** @class */ (function () {
    function OrderItemDTO() {
    }
    return OrderItemDTO;
}());



/***/ }),

/***/ "./src/app/dto/ProductDTO.ts":
/*!***********************************!*\
  !*** ./src/app/dto/ProductDTO.ts ***!
  \***********************************/
/*! exports provided: ProductDTO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDTO", function() { return ProductDTO; });
var ProductDTO = /** @class */ (function () {
    function ProductDTO() {
    }
    return ProductDTO;
}());



/***/ }),

/***/ "./src/app/dto/orderDTO.ts":
/*!*********************************!*\
  !*** ./src/app/dto/orderDTO.ts ***!
  \*********************************/
/*! exports provided: OrderDTO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDTO", function() { return OrderDTO; });
var OrderDTO = /** @class */ (function () {
    function OrderDTO() {
        this.groupedProducts = [];
    }
    return OrderDTO;
}());



/***/ }),

/***/ "./src/app/entity/BasketItem.ts":
/*!**************************************!*\
  !*** ./src/app/entity/BasketItem.ts ***!
  \**************************************/
/*! exports provided: BasketItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasketItem", function() { return BasketItem; });
var BasketItem = /** @class */ (function () {
    function BasketItem() {
    }
    return BasketItem;
}());



/***/ }),

/***/ "./src/app/entity/category.ts":
/*!************************************!*\
  !*** ./src/app/entity/category.ts ***!
  \************************************/
/*! exports provided: Category */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Category", function() { return Category; });
var Category = /** @class */ (function () {
    function Category() {
        this.categoryId = null;
    }
    return Category;
}());



/***/ }),

/***/ "./src/app/entity/product.ts":
/*!***********************************!*\
  !*** ./src/app/entity/product.ts ***!
  \***********************************/
/*! exports provided: Product */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return Product; });
var Product = /** @class */ (function () {
    function Product() {
        this.productId = null;
        this.available = true;
    }
    return Product;
}());



/***/ }),

/***/ "./src/app/entity/user.ts":
/*!********************************!*\
  !*** ./src/app/entity/user.ts ***!
  \********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
        this.username = null;
        this.password = null;
        this.confirmPassword = null;
    }
    return User;
}());



/***/ }),

/***/ "./src/app/global-properties.ts":
/*!**************************************!*\
  !*** ./src/app/global-properties.ts ***!
  \**************************************/
/*! exports provided: TOKEN_NAME, BASKET_ITEMS_AMOUNT, PRODUCT_SAVED_MSG, IMAGE_TYPE, PRODUCT_PAGE_SIZE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOKEN_NAME", function() { return TOKEN_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BASKET_ITEMS_AMOUNT", function() { return BASKET_ITEMS_AMOUNT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRODUCT_SAVED_MSG", function() { return PRODUCT_SAVED_MSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IMAGE_TYPE", function() { return IMAGE_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRODUCT_PAGE_SIZE", function() { return PRODUCT_PAGE_SIZE; });
var TOKEN_NAME = 'access_token';
var BASKET_ITEMS_AMOUNT = 'basketItemsAmount';
var PRODUCT_SAVED_MSG = 'The product has been added successfully :)';
var IMAGE_TYPE = 'data:image/PNG;base64,';
var PRODUCT_PAGE_SIZE = '5';


/***/ }),

/***/ "./src/app/navigation/basket/basket.component.css":
/*!********************************************************!*\
  !*** ./src/app/navigation/basket/basket.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdmlnYXRpb24vYmFza2V0L2Jhc2tldC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/navigation/basket/basket.component.html":
/*!*********************************************************!*\
  !*** ./src/app/navigation/basket/basket.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"basketForm\" *ngIf=\"products.length > 0\">\r\n  <table id=\"productsTableHead\" class=\"table font-class product-table fixed_headers category-tree-content\">\r\n    <thead class=\"product-table-header\">\r\n    <tr class=\"text-center\">\r\n      <th scope=\"col\" width=\"25%\">Category</th>\r\n      <th scope=\"col\" width=\"25%\">Name</th>\r\n      <th scope=\"col\" width=\"15%\">Price</th>\r\n      <th scope=\"col\" width=\"15%\">Count</th>\r\n      <th scope=\"col\" width=\"20%\">Action</th>\r\n    </tr>\r\n    </thead>\r\n  </table>\r\n  <div class=\"scrollable-content\">\r\n    <table id=\"basketTable\" class=\"table font-class product-table fixed_headers category-tree-content\">\r\n      <tbody id=\"basketTblBody\">\r\n      <tr *ngFor=\"let item of basketItems\">\r\n        <td scope=\"row\" class=\"text-center\" width=\"25%\"><span>{{item.product.category.name}}</span></td>\r\n        <td scope=\"row\" class=\"text-center\" width=\"25%\"><span>{{item.product.name}}</span></td>\r\n        <td class=\"text-center\" width=\"15%\"><span>{{item.product.price | number: '.2'}}</span></td>\r\n        <td scope=\"row\" class=\"text-center\" width=\"15%\"><input type=\"number\" min=\"1\" max=\"100\" [value]=\"item.amount\"\r\n                                                               (change)=\"changeProductAmount(item, $event)\"/>\r\n        </td>\r\n        <td class=\"text-center\" width=\"20%\">\r\n          <button class=\"btn btn-primary btn-xs\" type=\"button\" (click)=\"deleteItem(item)\">Delete\r\n          </button>\r\n        </td>\r\n      </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n  <div class=\"text-right font-class\">\r\n    <span>Total price:&nbsp;{{totalPrice | number: '.2'}}</span>\r\n    <span id=\"totalPrice\"></span>\r\n    <button id=\"createOrder\" class=\"btn btn-primary btn-xs\" type=\"submit\" (click)=\"saveOrder()\">Create Order</button>\r\n    <button id=\"closeBasket\" class=\"btn btn-primary btn-xs\" type=\"button\">Close</button>\r\n    <span>&nbsp;</span>\r\n  </div>\r\n</div>\r\n\r\n<div id=\"emptyBasket\" *ngIf=\"basketItems.length == 0\">\r\n  <div class=\"text-center m-auto\">\r\n    <h3 style=\"color: red;\" class=\"font-class\">O_ops! The basket is empty &#9785;</h3>\r\n    <img src=\"/assets/img/empty_result.jpg\">\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/navigation/basket/basket.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/navigation/basket/basket.component.ts ***!
  \*******************************************************/
/*! exports provided: BasketComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasketComponent", function() { return BasketComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_basket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/basket.service */ "./src/app/service/basket.service.ts");
/* harmony import */ var rxjs_observable_from__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/observable/from */ "./node_modules/rxjs-compat/_esm5/observable/from.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _entity_BasketItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../entity/BasketItem */ "./src/app/entity/BasketItem.ts");
/* harmony import */ var _global_properties__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../global-properties */ "./src/app/global-properties.ts");
/* harmony import */ var _service_order_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../service/order.service */ "./src/app/service/order.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");









var BasketComponent = /** @class */ (function () {
    function BasketComponent(basketService, orderService, router) {
        this.basketService = basketService;
        this.orderService = orderService;
        this.router = router;
        this.products = [];
        this.basketItems = [];
        this.totalPrice = 0.0;
    }
    BasketComponent.prototype.ngOnInit = function () {
        this.getBasketItems();
    };
    BasketComponent.prototype.getBasketItems = function () {
        var _this = this;
        var resultItems = [];
        this.basketService.getBasketItems().subscribe(function (result) {
            _this.products = result;
            _this.calculateTotalPrice();
            var groupedProducts = Object(rxjs_observable_from__WEBPACK_IMPORTED_MODULE_3__["from"])(result).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["groupBy"])(function (product) { return product.productId; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (group) { return group.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["toArray"])()); }));
            var subscribe = groupedProducts.subscribe(function (val) {
                var item = new _entity_BasketItem__WEBPACK_IMPORTED_MODULE_5__["BasketItem"]();
                item.product = val[0];
                item.amount = val.length;
                resultItems.push(item);
            });
            _this.basketItems = resultItems;
            localStorage.setItem(_global_properties__WEBPACK_IMPORTED_MODULE_6__["BASKET_ITEMS_AMOUNT"], (_this.products.length).toString());
        });
    };
    BasketComponent.prototype.calculateTotalPrice = function () {
        var result = 0.0;
        this.products.forEach(function (product) {
            result += product.price;
        });
        this.totalPrice = result;
    };
    BasketComponent.prototype.changeProductAmount = function (productItem, event) {
        var _this = this;
        var difference = event.target.value - productItem.amount;
        var productListRequest = Array(Math.abs(difference)).fill(productItem.product);
        if (difference < 0) {
            this.basketService.deleteProductFromBasket(productListRequest).subscribe(function () { return _this.getBasketItems(); });
        }
        else {
            this.basketService.addProductToBasket(productListRequest).subscribe(function () { return _this.getBasketItems(); });
        }
    };
    BasketComponent.prototype.deleteItem = function (productItem) {
        var _this = this;
        var productListRequest = Array(Math.abs(productItem.amount)).fill(productItem.product);
        this.basketService.deleteProductFromBasket(productListRequest).subscribe(function () { return _this.getBasketItems(); });
    };
    BasketComponent.prototype.saveOrder = function () {
        var _this = this;
        if (localStorage.getItem(_global_properties__WEBPACK_IMPORTED_MODULE_6__["TOKEN_NAME"])) {
            this.orderService.saveOrder().subscribe(function () {
                localStorage.setItem(_global_properties__WEBPACK_IMPORTED_MODULE_6__["BASKET_ITEMS_AMOUNT"], '0');
                _this.router.navigate(['/userOrders']);
            });
        }
        else {
            this.router.navigate(['/login']);
        }
    };
    BasketComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-basket',
            template: __webpack_require__(/*! ./basket.component.html */ "./src/app/navigation/basket/basket.component.html"),
            styles: [__webpack_require__(/*! ./basket.component.css */ "./src/app/navigation/basket/basket.component.css")]
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_basket_service__WEBPACK_IMPORTED_MODULE_2__["BasketService"], _service_order_service__WEBPACK_IMPORTED_MODULE_7__["OrderService"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]])
    ], BasketComponent);
    return BasketComponent;
}());



/***/ }),

/***/ "./src/app/navigation/catalogue/catalogue.component.css":
/*!**************************************************************!*\
  !*** ./src/app/navigation/catalogue/catalogue.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdmlnYXRpb24vY2F0YWxvZ3VlL2NhdGFsb2d1ZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/navigation/catalogue/catalogue.component.html":
/*!***************************************************************!*\
  !*** ./src/app/navigation/catalogue/catalogue.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-inline font-class\" style=\"width: 75%; margin-top: 2%;\">\r\n  <label class=\"product-filter-item\">Category:</label>\r\n  <select class=\"selectpicker product-filter-item\" id=\"categoryFilter\"\r\n          [(ngModel)]=\"selectedCategoryId\" name=\"selectedCategory\" (ngModelChange)=\"filterByCategory()\">\r\n    <option [ngValue]=\"null\">-none-</option>\r\n    <option *ngFor=\"let category of categories\" [value]=\"category.categoryId\">\r\n      <span *ngIf=\"category.parentCategory == null\">{{category.name}}</span>\r\n      <span *ngIf=\"category.parentCategory != null\">&nbsp;&nbsp;-{{category.name}}</span>\r\n    </option>\r\n  </select>\r\n</div>\r\n<div class=\"container scrollable-content font-class\">\r\n  <div id=\"catalogueGrid\" class=\"flex-row row\">\r\n    <div class=\"col-xs-6 col-sm-4 col-lg-3 text-center\" *ngFor=\"let dto of products\">\r\n      <div class=\"thumbnail\">\r\n        <div class=\"caption\">\r\n          <div style=\"height: 75%;\">\r\n            <img [src]='productService.getProductImage(dto)'>\r\n          </div>\r\n          <h4>{{dto.product.name}}</h4>\r\n          <span class=\"flex-text text-muted\">{{dto.product.price| number:'.2'}}</span>\r\n          <p class=\"flex-text text-muted\" text=\"${product.available} ? 'Available' : 'On Order'\"></p>\r\n          <p><a [routerLink]=\"['/product-details', dto.product.productId]\" class=\"btn btn-primary\">Details</a></p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/navigation/catalogue/catalogue.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/navigation/catalogue/catalogue.component.ts ***!
  \*************************************************************/
/*! exports provided: CatalogueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogueComponent", function() { return CatalogueComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/product.service */ "./src/app/service/product.service.ts");
/* harmony import */ var _service_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/category.service */ "./src/app/service/category.service.ts");




var CatalogueComponent = /** @class */ (function () {
    function CatalogueComponent(productService, categoryService) {
        this.productService = productService;
        this.categoryService = categoryService;
        this.selectedCategoryId = null;
    }
    CatalogueComponent.prototype.ngOnInit = function () {
        this.getProducts();
        this.getCategories();
    };
    CatalogueComponent.prototype.getProducts = function () {
        var _this = this;
        this.productService.getProducts().subscribe(function (products) {
            _this.products = products;
        }, function (error) {
            console.log(error);
        });
    };
    CatalogueComponent.prototype.getCategories = function () {
        var _this = this;
        this.categoryService.getCategories()
            .subscribe(function (categories) {
            _this.categories = categories;
        }, function (error) {
            console.log(error);
        });
    };
    CatalogueComponent.prototype.filterByCategory = function () {
        var _this = this;
        if (this.selectedCategoryId) {
            this.productService.filterProductsByCategory(this.selectedCategoryId)
                .subscribe(function (products) {
                _this.products = products;
            }, function (error) {
                console.log(error);
            });
            return;
        }
        this.getProducts();
    };
    CatalogueComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-catalogue',
            template: __webpack_require__(/*! ./catalogue.component.html */ "./src/app/navigation/catalogue/catalogue.component.html"),
            styles: [__webpack_require__(/*! ./catalogue.component.css */ "./src/app/navigation/catalogue/catalogue.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"], _service_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"]])
    ], CatalogueComponent);
    return CatalogueComponent;
}());



/***/ }),

/***/ "./src/app/navigation/catalogue/product-details/product-details.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/navigation/catalogue/product-details/product-details.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdmlnYXRpb24vY2F0YWxvZ3VlL3Byb2R1Y3QtZGV0YWlscy9wcm9kdWN0LWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/navigation/catalogue/product-details/product-details.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/navigation/catalogue/product-details/product-details.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container portfolio font-class\">\r\n  <div class=\"row \" *ngIf=\"basketInfoMessage\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"heading alert-info\" style=\"background-color: #d1ecf1;\">\r\n        {{basketInfoMessage}}\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"heading\">\r\n        <img src=\"/assets/img/details_logo.jpg\"/>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"bio-info\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12\">\r\n            <div class=\"bio-image\">\r\n              <img [src]=\"productService.getProductImage(productDTO)\" alt=\"No photo ¯\\_(ツ)_/¯\"/>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <div class=\"bio-content\">\r\n          <h3>Hi, my name is&nbsp;{{productDTO.product.name}}</h3>\r\n          <br/>\r\n          <h6>My price is&nbsp;{{productDTO.product.price | number:'.2'}}</h6>\r\n          <h6 style=\"color: #004085;\" *ngIf=\"productDTO.product.available\">Luckily, I'm available &#9786;</h6>\r\n          <h6 style=\"color: red;\" *ngIf=\"!productDTO.product.available\">Unfortunately, I'm available only on order\r\n            &#9785;</h6>\r\n          <br/>\r\n          <h3>A little bit about me:&nbsp;{{productDTO.product.description}}</h3>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"text-right\">\r\n      <button class=\"btn btn-primary add-category-btn\" type=\"submit\" (click)=\"addProductToBasket(productDTO.product)\">Buy</button>\r\n      <a href=\"catalogue\">\r\n        <button type=\"button\" class=\"btn btn-primary add-category-btn\">Close</button>\r\n      </a>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/navigation/catalogue/product-details/product-details.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/navigation/catalogue/product-details/product-details.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ProductDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsComponent", function() { return ProductDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _entity_product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../entity/product */ "./src/app/entity/product.ts");
/* harmony import */ var _service_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../service/product.service */ "./src/app/service/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _basket_basket_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../basket/basket.component */ "./src/app/navigation/basket/basket.component.ts");
/* harmony import */ var _service_basket_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../service/basket.service */ "./src/app/service/basket.service.ts");
/* harmony import */ var _global_properties__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../global-properties */ "./src/app/global-properties.ts");
/* harmony import */ var _dto_ProductDTO__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../dto/ProductDTO */ "./src/app/dto/ProductDTO.ts");









var ProductDetailsComponent = /** @class */ (function () {
    function ProductDetailsComponent(productService, route, basketComponent, basketService) {
        this.productService = productService;
        this.route = route;
        this.basketComponent = basketComponent;
        this.basketService = basketService;
        this.productDTO = new _dto_ProductDTO__WEBPACK_IMPORTED_MODULE_8__["ProductDTO"]();
    }
    ProductDetailsComponent.prototype.ngOnInit = function () {
        this.productDTO.product = new _entity_product__WEBPACK_IMPORTED_MODULE_2__["Product"]();
        this.basketInfoMessage = null;
        this.findProductById();
    };
    ProductDetailsComponent.prototype.addProductToBasket = function (product) {
        var _this = this;
        var currItemsAmount = +localStorage.getItem(_global_properties__WEBPACK_IMPORTED_MODULE_7__["BASKET_ITEMS_AMOUNT"]);
        this.basketService.addProductToBasket(new Array(1).fill(product)).subscribe(function () {
            _this.basketInfoMessage = _global_properties__WEBPACK_IMPORTED_MODULE_7__["PRODUCT_SAVED_MSG"];
            currItemsAmount++;
            localStorage.setItem(_global_properties__WEBPACK_IMPORTED_MODULE_7__["BASKET_ITEMS_AMOUNT"], currItemsAmount.toString());
        });
    };
    ProductDetailsComponent.prototype.findProductById = function () {
        var _this = this;
        this.productService.getProductById(this.route.snapshot.params.productId).subscribe(function (productDTO) {
            _this.productDTO = productDTO;
        }, function (error) {
            console.log(error);
        });
    };
    ProductDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-details',
            template: __webpack_require__(/*! ./product-details.component.html */ "./src/app/navigation/catalogue/product-details/product-details.component.html"),
            styles: [__webpack_require__(/*! ./product-details.component.css */ "./src/app/navigation/catalogue/product-details/product-details.component.css")]
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _basket_basket_component__WEBPACK_IMPORTED_MODULE_5__["BasketComponent"], _service_basket_service__WEBPACK_IMPORTED_MODULE_6__["BasketService"]])
    ], ProductDetailsComponent);
    return ProductDetailsComponent;
}());



/***/ }),

/***/ "./src/app/navigation/category-tree/category-tree.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/navigation/category-tree/category-tree.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-margin {\r\n  margin-left: 0.3%;\r\n}\r\n\r\n.modal-body{\r\n  margin-left: 4% !important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2aWdhdGlvbi9jYXRlZ29yeS10cmVlL2NhdGVnb3J5LXRyZWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1QiIsImZpbGUiOiJzcmMvYXBwL25hdmlnYXRpb24vY2F0ZWdvcnktdHJlZS9jYXRlZ29yeS10cmVlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuLW1hcmdpbiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDAuMyU7XHJcbn1cclxuXHJcbi5tb2RhbC1ib2R5e1xyXG4gIG1hcmdpbi1sZWZ0OiA0JSAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/navigation/category-tree/category-tree.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/navigation/category-tree/category-tree.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"alert alert-danger font-class\" *ngIf=\"errorMsg\">{{errorMsg}}</div>\r\n<div class=\"category-tree font-class\">\r\n  <div class=\"text-right\">\r\n    <button id=\"addCategoryBtn\" class=\"btn btn-primary btn-lg add-category-btn font-class\" type=\"button\"\r\n            mat-raised-button (click)=\"showChildModal()\">Add\r\n    </button>\r\n  </div>\r\n  <div bsModal #categoryDialog=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\"\r\n       role=\"dialog\" aria-labelledby=\"dialog-child-name\">\r\n    <div class=\"modal-dialog modal-lg\">\r\n      <div class=\"modal-content\" *ngIf=\"categoryToDelete == null\">\r\n        <form (ngSubmit)=\"saveCategory()\" #categoryForm=\"ngForm\">\r\n          <div class=\"modal-body\">\r\n            <div class=\"row\">\r\n              <div class=\"col-sm\">\r\n                Parent Category:\r\n              </div>\r\n              <div class=\"col-sm\">\r\n                <select class=\"add-category-field\" id=\"parentCategory\"\r\n                        [(ngModel)]=\"editableCategory.parentCategory.categoryId\" name=\"rootCategory\"\r\n                        [disabled]=\"parentEditNotAvailable\">\r\n                  <option [ngValue]=\"null\">-none-</option>\r\n                  <option *ngFor=\"let root of rootCategories\"\r\n                          [value]=\"root.categoryId\">{{root.name}}\r\n                  </option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-sm\">\r\n                Category Name:&nbsp;\r\n              </div>\r\n              <div class=\"col-sm\">\r\n                <input name=\"categoryName\" #categoryName=\"ngModel\" class=\"add-category-field\" type=\"text\"\r\n                       maxlength=\"256\" [(ngModel)]=\"editableCategory.name\" required/>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-sm\">&nbsp;</div>\r\n              <div class=\"col-sm\">\r\n                <span id=\"nameEmptyError\" class=\"error-msg\"\r\n                      *ngIf=\"editableCategory.name != undefined && categoryName.invalid\">Name should not be empty!</span>\r\n              </div>\r\n            </div>\r\n            <div class=\"text-right add-ctgr-footer\">\r\n              <button id=\"saveCategory\" type=\"submit\" [disabled]=\"categoryName.invalid\"\r\n                      class=\"btn btn-primary add-category-btn\">Save\r\n              </button>\r\n              <button type=\"button\" class=\"btn btn-primary add-category-btn\" mat-raised-button\r\n                      (click)=\"hideChildModal()\">\r\n                Close\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n      <div class=\"modal-content\" *ngIf=\"categoryToDelete != null\">\r\n        <div class=\"modal-header\">\r\n          <h5 class=\"modal-title\" id=\"confirmLabel\">Delete category</h5>\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\" (click)=\"hideChildModal()\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          Are you sure?\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button id=\"deleteCategoryBtn\" type=\"submit\" class=\"btn btn-primary\" (click)=\"deleteCategory()\">Delete\r\n          </button>\r\n          <button id=\"confirmDlgCloseBtn\" type=\"button\" class=\"btn btn-primary\" (click)=\"hideChildModal()\">Close\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div class=\"scrollable-content\">\r\n    <ul *ngFor=\"let category of categories;\">\r\n      <li class=\"list-group-item list-group-item-info\" *ngIf=\"!category.parentCategory\">\r\n        <input type=\"hidden\" value=\"{{category.categoryId}}\">\r\n        <span>{{category.name}}</span>\r\n        <a>\r\n          <button class=\"btn btn-primary btn-xs btn-margin\" type=\"button\" (click)=\"openEditCategoryForm(category)\">\r\n            Edit\r\n          </button>\r\n        </a>\r\n        <button class=\"deleteCategory btn btn-primary btn-xs btn-margin\" type=\"button\" data-toggle=\"modal\"\r\n                data-target=\"#confirmationModal\" (click)=\"openDeleteCategoryForm(category)\">Delete\r\n        </button>\r\n        <ul *ngFor=\"let subcategory of categories;\">\r\n          <li class=\"list-group-item list-group-item-secondary\"\r\n              *ngIf=\"subcategory.parentCategory && subcategory.parentCategory.categoryId == category.categoryId\">\r\n            <input type=\"hidden\" value=\"{{subcategory.parentCategory.categoryId}}\">\r\n            <input type=\"hidden\" value=\"{{subcategory.categoryId}}\">\r\n            <span>{{subcategory.name}}</span>\r\n            <a>\r\n              <button class=\"btn btn-primary btn-xs btn-margin\" type=\"button\"\r\n                      (click)=\"openEditCategoryForm(subcategory)\">Edit\r\n              </button>\r\n            </a>\r\n            <button class=\"deleteCategory btn btn-primary btn-xs btn-margin\" type=\"button\" data-toggle=\"modal\"\r\n                    data-target=\"#categoryDialog\" (click)=\"openDeleteCategoryForm(subcategory)\">Delete\r\n            </button>\r\n          </li>\r\n        </ul>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/navigation/category-tree/category-tree.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/navigation/category-tree/category-tree.component.ts ***!
  \*********************************************************************/
/*! exports provided: CategoryTreeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryTreeComponent", function() { return CategoryTreeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/category.service */ "./src/app/service/category.service.ts");
/* harmony import */ var _entity_category__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../entity/category */ "./src/app/entity/category.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");






var CategoryTreeComponent = /** @class */ (function () {
    function CategoryTreeComponent(categoryService, dialog) {
        this.categoryService = categoryService;
        this.dialog = dialog;
        this.editableCategory = new _entity_category__WEBPACK_IMPORTED_MODULE_3__["Category"]();
        this.parentEditNotAvailable = false;
        this.categoryToDelete = null;
    }
    CategoryTreeComponent.prototype.getCategories = function () {
        var _this = this;
        this.categoryService.getCategories()
            .subscribe(function (categories) {
            _this.categories = categories;
        }, function (error) {
            console.log(error);
        });
    };
    CategoryTreeComponent.prototype.ngOnInit = function () {
        this.getCategories();
        this.getRootCategories();
        this.fillEmptyEditableCategory();
    };
    CategoryTreeComponent.prototype.getRootCategories = function () {
        var _this = this;
        this.categoryService.getRootCategories()
            .subscribe(function (rootCategories) {
            _this.rootCategories = rootCategories.filter(function (category) { return category.categoryId != _this.editableCategory.categoryId; });
        });
    };
    CategoryTreeComponent.prototype.showChildModal = function () {
        this.getRootCategories();
        this.fillParentChangeAvailable();
        this.childModal.show();
    };
    CategoryTreeComponent.prototype.openEditCategoryForm = function (selectedCategory) {
        this.categoryToDelete = null;
        this.editableCategory.categoryId = selectedCategory.categoryId;
        this.editableCategory.name = selectedCategory.name;
        var categoryId = selectedCategory.parentCategory == null ? null : selectedCategory.parentCategory.categoryId;
        this.editableCategory.parentCategory.categoryId = categoryId;
        this.showChildModal();
    };
    CategoryTreeComponent.prototype.openDeleteCategoryForm = function (categoryToDelete) {
        this.categoryToDelete = categoryToDelete;
        this.showChildModal();
    };
    CategoryTreeComponent.prototype.hideChildModal = function () {
        this.childModal.hide();
        this.fillEmptyEditableCategory();
    };
    CategoryTreeComponent.prototype.saveCategory = function () {
        var _this = this;
        this.buildParentCategory();
        this.categoryService.saveCategory(this.editableCategory).subscribe(function (data) {
            _this.getCategories();
            _this.getRootCategories();
        });
        this.hideChildModal();
    };
    CategoryTreeComponent.prototype.deleteCategory = function () {
        var _this = this;
        this.categoryService.deleteCategoryById(this.categoryToDelete).subscribe(function () {
            _this.getCategories();
        }, function (error) {
            _this.errorMsg = error.error.message;
            console.log(error);
        });
        this.hideChildModal();
    };
    CategoryTreeComponent.prototype.fillParentChangeAvailable = function () {
        var _this = this;
        if (this.editableCategory.categoryId == null) {
            this.parentEditNotAvailable = false;
            return;
        }
        this.categoryService.findSubcategories(this.editableCategory.categoryId).subscribe(function (subcategories) {
            _this.parentEditNotAvailable = subcategories.length > 0;
        });
    };
    CategoryTreeComponent.prototype.fillEmptyEditableCategory = function () {
        this.editableCategory = new _entity_category__WEBPACK_IMPORTED_MODULE_3__["Category"]();
        this.editableCategory.parentCategory = new _entity_category__WEBPACK_IMPORTED_MODULE_3__["Category"]();
        this.editableCategory.parentCategory.categoryId = null;
    };
    CategoryTreeComponent.prototype.buildParentCategory = function () {
        this.editableCategory['parentCategoryId'] = null;
        var selectedParent = this.editableCategory.parentCategory.categoryId;
        if (selectedParent == null) {
            this.editableCategory.parentCategory = null;
        }
        else {
            this.editableCategory.parentCategory = new _entity_category__WEBPACK_IMPORTED_MODULE_3__["Category"]();
            this.editableCategory.parentCategory.categoryId = selectedParent;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('categoryDialog'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ModalDirective"])
    ], CategoryTreeComponent.prototype, "childModal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('confirmDialog'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ModalDirective"])
    ], CategoryTreeComponent.prototype, "confirmDialog", void 0);
    CategoryTreeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-category-tree',
            template: __webpack_require__(/*! ./category-tree.component.html */ "./src/app/navigation/category-tree/category-tree.component.html"),
            styles: [__webpack_require__(/*! ./category-tree.component.css */ "./src/app/navigation/category-tree/category-tree.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])
    ], CategoryTreeComponent);
    return CategoryTreeComponent;
}());



/***/ }),

/***/ "./src/app/navigation/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/navigation/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\n.home-image{\r\n  width: auto;\r\n  height: 93vh;\r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n*/\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2aWdhdGlvbi9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Q0FRQyIsImZpbGUiOiJzcmMvYXBwL25hdmlnYXRpb24vaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4uaG9tZS1pbWFnZXtcclxuICB3aWR0aDogYXV0bztcclxuICBoZWlnaHQ6IDkzdmg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcbiovXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/navigation/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/navigation/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img class=\"home-image\" src=\"/assets/img/home.jpg\"/>\r\n"

/***/ }),

/***/ "./src/app/navigation/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/navigation/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/navigation/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/navigation/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/navigation/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/navigation/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdmlnYXRpb24vbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/navigation/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/navigation/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"form-signin text-center font-class userLogOrRegForm\" (ngSubmit)=\"login()\">\r\n  <fieldset>\r\n    <h1>Please Sign In</h1>\r\n    <div>\r\n      <div class=\"alert alert-danger\" *ngIf=\"error\">\r\n        {{error}}\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <input type=\"text\" name=\"username\" id=\"username\" class=\"form-control input-lg\"\r\n             placeholder=\"UserName\" autofocus=\"true\" max=\"256\" [(ngModel)]=\"user.username\"/>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <input type=\"password\" name=\"password\" id=\"password\" class=\"form-control input-lg\"\r\n             placeholder=\"Password\" [(ngModel)]=\"user.password\"/>\r\n    </div>\r\n    <div class=\"text-center\">\r\n      <button class=\"btn btn-primary btn-block\" type=\"submit\">Log in</button>\r\n      <a href=\"/registration\" style=\"text-decoration: none;\">\r\n        <button class=\"btn btn-primary btn-block\" type=\"button\">Create an Account\r\n        </button>\r\n      </a>\r\n    </div>\r\n  </fieldset>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/navigation/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/navigation/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/authentication.service */ "./src/app/service/authentication.service.ts");
/* harmony import */ var _entity_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../entity/user */ "./src/app/entity/user.ts");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/user.service */ "./src/app/service/user.service.ts");






var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, activatedRoute, authenticationService, userService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.authenticationService = authenticationService;
        this.userService = userService;
        this.user = new _entity_user__WEBPACK_IMPORTED_MODULE_4__["User"]();
        this.redirectUrl = this.activatedRoute.snapshot.queryParams['redirectTo'];
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.userService.logout();
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.error = undefined;
        if (!this.loginDataIsValid()) {
            return;
        }
        this.authenticationService.login(this.user.username, this.user.password)
            .subscribe(function (result) {
            if (result) {
                _this.userService.login(result);
                _this.navigateAfterSuccess();
            }
            else {
                _this.error = 'Username or password is incorrect';
            }
        }, function (error) {
            _this.error = 'Username or password is incorrect';
        });
    };
    LoginComponent.prototype.navigateAfterSuccess = function () {
        this.router.navigate(['/home']);
    };
    LoginComponent.prototype.loginDataIsValid = function () {
        if (!this.user.username || !this.user.password) {
            this.error = 'Username and password should not be empty';
            return false;
        }
        return true;
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/navigation/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/navigation/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _service_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"],
            _service_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/navigation/manage-products/manage-products.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/navigation/manage-products/manage-products.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".add-product-btn {\r\n  margin-top: 2%;\r\n  margin-bottom: 1.5%;\r\n  margin-right: 5%;\r\n}\r\n\r\n.product-table{\r\n  width: 98%!important;\r\n  margin-left: 1%;\r\n  margin-right: 10%;\r\n  margin-top: 2px;\r\n}\r\n\r\n.product-filter-dropdown{\r\n  width: 25%;\r\n}\r\n\r\n.product-filter-item{\r\n  margin-left: 2%;\r\n}\r\n\r\n.product-table-header{\r\n  background-color: rgba(0,0,0,.125);\r\n}\r\n\r\n.product-img{\r\n  width: 140px;\r\n  height: 110px;\r\n}\r\n\r\n#productsTableHead{\r\n  margin-bottom: 0 !important;\r\n}\r\n\r\n.product-container{\r\n  margin-left: 5%;\r\n}\r\n\r\n.flex-row {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.flex-row > [class*='col-'] {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.flex-row .thumbnail,\r\n.flex-row .caption {\r\n  flex-direction: column;\r\n  display: flex;\r\n  flex: 1 0 auto;\r\n  height: auto;\r\n  position: relative;\r\n}\r\n\r\n.flex-text {\r\n  flex-grow: 1;\r\n}\r\n\r\n.flex-row img {\r\n  min-width: 0;\r\n  width: 75%;\r\n}\r\n\r\n@media only screen and (max-width : 480px){\r\n  .flex-row > [class*='col-'] {\r\n    width: 100%;\r\n  }\r\n  .flex-row  {\r\n    padding-left: 0px;\r\n    padding-right: 0px;\r\n  }\r\n}\r\n\r\n.container{\r\n  max-width: 98% !important;\r\n}\r\n\r\n.catalogue-img{\r\n  padding: 10% 10% 10% 10%;\r\n}\r\n\r\n.catalogue-filter{\r\n  margin-left: 5%;\r\n  margin-top: 2%;\r\n}\r\n\r\n.portfolio{\r\n  padding:6%;\r\n  text-align:center;\r\n}\r\n\r\n.heading{\r\n  background: #fff;\r\n  padding: 1%;\r\n  text-align: left;\r\n  box-shadow: 0px 0px 4px 0px #545b62;\r\n}\r\n\r\n.heading img{\r\n  width: 10%;\r\n}\r\n\r\n.bio-info{\r\n  padding: 2%;\r\n  background:#fff;\r\n  box-shadow: 0px 0px 4px 0px #b0b3b7;\r\n}\r\n\r\n.name{\r\n  font-family: 'Charmonman', cursive;\r\n  font-weight:600;\r\n}\r\n\r\n.bio-image{\r\n  text-align:center;\r\n}\r\n\r\n.bio-image img{\r\n  width: 60%;\r\n  height: auto;\r\n  border-radius:50%;\r\n}\r\n\r\n.bio-content{\r\n  text-align:left;\r\n}\r\n\r\n.bio-content p{\r\n  font-weight:600;\r\n  font-size:30px;\r\n}\r\n\r\n#totalPrice{\r\n  margin-right: 2%;\r\n  margin-top: 1%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2aWdhdGlvbi9tYW5hZ2UtcHJvZHVjdHMvbWFuYWdlLXByb2R1Y3RzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7O0VBRUUsc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixjQUFjO0VBQ2QsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLFlBQVk7QUFDZDs7QUFDQTtFQUNFLFlBQVk7RUFDWixVQUFVO0FBQ1o7O0FBRUE7RUFDRTtJQUNFLFdBQVc7RUFDYjtFQUNBO0lBQ0UsaUJBQWlCO0lBQ2pCLGtCQUFrQjtFQUNwQjtBQUNGOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsbUNBQW1DO0FBQ3JDOztBQUNBO0VBQ0UsVUFBVTtBQUNaOztBQUNBO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixtQ0FBbUM7QUFDckM7O0FBQ0E7RUFDRSxrQ0FBa0M7RUFDbEMsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFDQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLGVBQWU7RUFDZixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9uYXZpZ2F0aW9uL21hbmFnZS1wcm9kdWN0cy9tYW5hZ2UtcHJvZHVjdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hZGQtcHJvZHVjdC1idG4ge1xyXG4gIG1hcmdpbi10b3A6IDIlO1xyXG4gIG1hcmdpbi1ib3R0b206IDEuNSU7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1JTtcclxufVxyXG5cclxuLnByb2R1Y3QtdGFibGV7XHJcbiAgd2lkdGg6IDk4JSFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLWxlZnQ6IDElO1xyXG4gIG1hcmdpbi1yaWdodDogMTAlO1xyXG4gIG1hcmdpbi10b3A6IDJweDtcclxufVxyXG5cclxuLnByb2R1Y3QtZmlsdGVyLWRyb3Bkb3due1xyXG4gIHdpZHRoOiAyNSU7XHJcbn1cclxuXHJcbi5wcm9kdWN0LWZpbHRlci1pdGVte1xyXG4gIG1hcmdpbi1sZWZ0OiAyJTtcclxufVxyXG5cclxuLnByb2R1Y3QtdGFibGUtaGVhZGVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsLjEyNSk7XHJcbn1cclxuXHJcbi5wcm9kdWN0LWltZ3tcclxuICB3aWR0aDogMTQwcHg7XHJcbiAgaGVpZ2h0OiAxMTBweDtcclxufVxyXG5cclxuI3Byb2R1Y3RzVGFibGVIZWFke1xyXG4gIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnByb2R1Y3QtY29udGFpbmVye1xyXG4gIG1hcmdpbi1sZWZ0OiA1JTtcclxufVxyXG5cclxuLmZsZXgtcm93IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG4uZmxleC1yb3cgPiBbY2xhc3MqPSdjb2wtJ10ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmZsZXgtcm93IC50aHVtYm5haWwsXHJcbi5mbGV4LXJvdyAuY2FwdGlvbiB7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXg6IDEgMCBhdXRvO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLmZsZXgtdGV4dCB7XHJcbiAgZmxleC1ncm93OiAxO1xyXG59XHJcbi5mbGV4LXJvdyBpbWcge1xyXG4gIG1pbi13aWR0aDogMDtcclxuICB3aWR0aDogNzUlO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGggOiA0ODBweCl7XHJcbiAgLmZsZXgtcm93ID4gW2NsYXNzKj0nY29sLSddIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAuZmxleC1yb3cgIHtcclxuICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmNvbnRhaW5lcntcclxuICBtYXgtd2lkdGg6IDk4JSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY2F0YWxvZ3VlLWltZ3tcclxuICBwYWRkaW5nOiAxMCUgMTAlIDEwJSAxMCU7XHJcbn1cclxuXHJcbi5jYXRhbG9ndWUtZmlsdGVye1xyXG4gIG1hcmdpbi1sZWZ0OiA1JTtcclxuICBtYXJnaW4tdG9wOiAyJTtcclxufVxyXG5cclxuLnBvcnRmb2xpb3tcclxuICBwYWRkaW5nOjYlO1xyXG4gIHRleHQtYWxpZ246Y2VudGVyO1xyXG59XHJcbi5oZWFkaW5ne1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgcGFkZGluZzogMSU7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDRweCAwcHggIzU0NWI2MjtcclxufVxyXG4uaGVhZGluZyBpbWd7XHJcbiAgd2lkdGg6IDEwJTtcclxufVxyXG4uYmlvLWluZm97XHJcbiAgcGFkZGluZzogMiU7XHJcbiAgYmFja2dyb3VuZDojZmZmO1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggNHB4IDBweCAjYjBiM2I3O1xyXG59XHJcbi5uYW1le1xyXG4gIGZvbnQtZmFtaWx5OiAnQ2hhcm1vbm1hbicsIGN1cnNpdmU7XHJcbiAgZm9udC13ZWlnaHQ6NjAwO1xyXG59XHJcbi5iaW8taW1hZ2V7XHJcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbn1cclxuLmJpby1pbWFnZSBpbWd7XHJcbiAgd2lkdGg6IDYwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgYm9yZGVyLXJhZGl1czo1MCU7XHJcbn1cclxuLmJpby1jb250ZW50e1xyXG4gIHRleHQtYWxpZ246bGVmdDtcclxufVxyXG4uYmlvLWNvbnRlbnQgcHtcclxuICBmb250LXdlaWdodDo2MDA7XHJcbiAgZm9udC1zaXplOjMwcHg7XHJcbn1cclxuXHJcbiN0b3RhbFByaWNle1xyXG4gIG1hcmdpbi1yaWdodDogMiU7XHJcbiAgbWFyZ2luLXRvcDogMSU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/navigation/manage-products/manage-products.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/navigation/manage-products/manage-products.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"alert alert-danger font-class\" *ngIf=\"errorMsg\">{{errorMsg}}</div>\r\n<form class=\"form-inline font-class\">\r\n  <div class=\"form-inline\" style=\"width: 75%\">\r\n    <label class=\"product-filter-item\">Category:</label>\r\n    <select class=\"selectpicker product-filter-item\" id=\"categoryFilter\"\r\n            [(ngModel)]=\"selectedCategoryId\" name=\"selectedCategory\" (ngModelChange)=\"filterByCategory()\">\r\n      <option [ngValue]=\"null\">-none-</option>\r\n      <option *ngFor=\"let category of categories\" [value]=\"category.categoryId\">\r\n        <span *ngIf=\"category.parentCategory == null\">{{category.name}}</span>\r\n        <span *ngIf=\"category.parentCategory != null\">&nbsp;&nbsp;-{{category.name}}</span>\r\n      </option>\r\n    </select>\r\n  </div>\r\n  <div class=\"text-right\" style=\"width: 25%\">\r\n    <button id=\"addProductBtn\" class=\"btn btn-primary add-product-btn font-class text-right\" type=\"button\"\r\n            mat-raised-button (click)=\"openAddProductForm()\">\r\n      Add Product\r\n    </button>\r\n  </div>\r\n  <div bsModal #productDialog=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\"\r\n       role=\"dialog\" aria-labelledby=\"dialog-child-name\">\r\n    <div class=\"modal-dialog modal-lg\">\r\n      <div class=\"modal-content\" *ngIf=\"productToDelete == null\">\r\n        <form (ngSubmit)=\"saveProduct()\" #productForm=\"ngForm\">\r\n          <div class=\"modal-body\">\r\n            <div class=\"row\">\r\n              <div class=\"col-sm\">\r\n                Category:\r\n              </div>\r\n              <div class=\"col-sm\">\r\n                <select class=\"add-category-field\" id=\"parentCategory\"\r\n                        [(ngModel)]=\"editableCategory.categoryId\" name=\"rootCategory\"\r\n                        [ngModelOptions]=\"{standalone: true}\">\r\n                  <option *ngFor=\"let category of categories\" [value]=\"category.categoryId\">\r\n                    <span *ngIf=\"category.parentCategory == null\">{{category.name}}</span>\r\n                    <span *ngIf=\"category.parentCategory != null\">&nbsp;&nbsp;-{{category.name}}</span>\r\n                  </option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-sm\">\r\n                Name:&nbsp;\r\n              </div>\r\n              <div class=\"col-sm\">\r\n                <input name=\"productName\" class=\"add-category-field\" type=\"text\"\r\n                       maxlength=\"256\" [(ngModel)]=\"editableProductDTO.product.name\" #nameField=\"ngModel\" required/>\r\n                <span class=\"error-msg\" *ngIf=\"editableProductDTO.product.name != undefined && nameField.invalid\">Name should not be empty!</span>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-sm\">\r\n                Price:&nbsp;\r\n              </div>\r\n              <div class=\"col-sm\">\r\n                <input name=\"productPrice\" class=\"add-category-field\" type=\"text\"\r\n                       maxlength=\"256\" [(ngModel)]=\"editableProductDTO.product.price\" #priceField=\"ngModel\" required\r\n                       pattern=\"[0-9]*\\.{0,1}[0-9]{0,2}\" placeholder=\"00.00\"/>\r\n                <span class=\"error-msg\" *ngIf=\"editableProductDTO.product.price != undefined && priceField.invalid\">\r\n                  Please enter price using symbol '.' as a separator and no more 2 fractional digits after!</span>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-sm\">\r\n                Available/On Order:\r\n              </div>\r\n              <div class=\"col-lg product-field\">\r\n                <select id=\"status\" class=\"selectpicker add-category-field\"\r\n                        [(ngModel)]=\"editableProductDTO.product.available\"\r\n                        [ngModelOptions]=\"{standalone: true}\">\r\n                  <option [value]=\"true\">Available</option>\r\n                  <option [value]=\"false\">On Order</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-sm\">\r\n                Photo:\r\n              </div>\r\n              <div class=\"col-lg\" [formGroup]=\"productImgForm\">\r\n                <img class=\"product-img\" [src]=\"productService.getProductImage(editableProductDTO)\"\r\n                     *ngIf=\"editableProductDTO.product.photoPath != null\"/>\r\n                <input type=\"file\" (change)=\"onFileChange($event)\" name=\"uploadedFile\" formControlName=\"uploadImage\"\r\n                       required=\"{{editableProductDTO.imageContent == null}}\"/>\r\n                <span class=\"error-msg\" *ngIf=\"productImgForm.touched && productImgForm.invalid\">Photo should not be empty!</span>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-sm\">\r\n                Description:\r\n              </div>\r\n              <div class=\"col-lg product-field\">\r\n                <textarea rows=\"4\" id=\"productDescription\" class=\"add-category-field\"\r\n                          [(ngModel)]=\"editableProductDTO.product.description\" #descriptionFiled=\"ngModel\"\r\n                          required=\"true\"\r\n                          name=\"productDescription\"></textarea>\r\n                <span class=\"error-msg\"\r\n                      *ngIf=\"editableProductDTO.product.description != undefined && descriptionFiled.invalid\">\r\n                  Write at least a few words, what's the problem?</span>\r\n              </div>\r\n            </div>\r\n            <div class=\"text-right add-ctgr-footer\">\r\n              <button id=\"saveCategory\" type=\"submit\" class=\"btn btn-primary add-category-btn\"\r\n                      [disabled]=\"productForm.invalid || productImgForm.invalid\">\r\n                Save\r\n              </button>\r\n              <button type=\"button\" class=\"btn btn-primary add-category-btn\" mat-raised-button\r\n                      (click)=\"hideChildModal()\">\r\n                Close\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n\r\n\r\n      <div class=\"modal-content\" *ngIf=\"productToDelete != null\">\r\n        <div class=\"modal-header\">\r\n          <h5 class=\"modal-title\" id=\"confirmLabel\">Delete product</h5>\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\" (click)=\"hideChildModal()\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          Are you sure?\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button id=\"deleteCategoryBtn\" type=\"submit\" class=\"btn btn-primary\" (click)=\"deleteProduct()\">Delete\r\n          </button>\r\n          <button id=\"confirmDlgCloseBtn\" type=\"button\" class=\"btn btn-primary\" (click)=\"hideChildModal()\">Close\r\n          </button>\r\n        </div>\r\n      </div>\r\n\r\n\r\n    </div>\r\n  </div>\r\n\r\n</form>\r\n\r\n<table id=\"productsTableHead\" class=\"table font-class product-table fixed_headers category-tree-content\">\r\n  <thead class=\"product-table-header\">\r\n  <tr class=\"text-center\">\r\n    <th scope=\"col\" width=\"15%\">Name</th>\r\n    <th scope=\"col\" width=\"20%\">Photo</th>\r\n    <th scope=\"col\" width=\"10%\">Price</th>\r\n    <th scope=\"col\" width=\"30%\">Description</th>\r\n    <th scope=\"col\" width=\"15%\">Available/On Order</th>\r\n    <th scope=\"col\" width=\"20%\">Action</th>\r\n  </tr>\r\n  </thead>\r\n</table>\r\n<div [ngClass]=\"errorMsg ? 'content-height-error' : 'content-height'\">\r\n  <table id=\"productsTable\" class=\"table font-class product-table fixed_headers category-tree-content\">\r\n    <tbody id=\"productsTblBody\">\r\n    <tr *ngFor=\"let dto of products\">\r\n      <th scope=\"row\" class=\"text-center\" width=\"15%\"><span>{{dto.product.name}}</span></th>\r\n      <td class=\"text-center\" width=\"20%\"><img class=\"product-img\" [src]=\"productService.getProductImage(dto)\"\r\n                                               alt=\"No photo ¯\\_(ツ)_/¯\"/></td>\r\n      <td class=\"text-center\" width=\"10%\">{{dto.product.price | number:'.2'}}</td>\r\n      <td class=\"text-center\" width=\"30%\">{{dto.product.description}}</td>\r\n      <td class=\"text-center\" width=\"15%\">{{dto.product.available ? 'Available' : 'On Order'}}</td>\r\n      <td class=\"text-center\" width=\"20%\">\r\n        <input type=\"hidden\" value=\"{{dto.product.productId}}\">\r\n        <a style=\"margin-right: 3%;\">\r\n          <button class=\"btn btn-primary btn-xs\" type=\"button\" (click)=\"openEditProductForm(dto)\">Edit</button>\r\n        </a>\r\n        <button class=\"deleteProduct btn btn-primary btn-xs\" type=\"button\" (click)=\"openDeleteProductForm(dto.product)\">\r\n          Delete\r\n        </button>\r\n      </td>\r\n    </tr>\r\n    <tr class=\"text-center\">\r\n      <td colspan=\"6\">\r\n        <div class=\"d-flex justify-content-center\">\r\n          <ngb-pagination [collectionSize]=\"pageAmount\" [pageSize]=\"1\" [(page)]=\"currentPage\"\r\n                          [boundaryLinks]=\"true\" (pageChange)=\"loadPage($event)\"></ngb-pagination>\r\n        </div>\r\n      </td>\r\n    </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/navigation/manage-products/manage-products.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/navigation/manage-products/manage-products.component.ts ***!
  \*************************************************************************/
/*! exports provided: ManageProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageProductsComponent", function() { return ManageProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _entity_category__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../entity/category */ "./src/app/entity/category.ts");
/* harmony import */ var _entity_product__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../entity/product */ "./src/app/entity/product.ts");
/* harmony import */ var _service_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/product.service */ "./src/app/service/product.service.ts");
/* harmony import */ var _service_category_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/category.service */ "./src/app/service/category.service.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _dto_ProductDTO__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../dto/ProductDTO */ "./src/app/dto/ProductDTO.ts");









var ManageProductsComponent = /** @class */ (function () {
    function ManageProductsComponent(productService, categoryService) {
        this.productService = productService;
        this.categoryService = categoryService;
        this.selectedCategoryId = null;
        this.products = new Array();
        this.pageAmount = 1;
        this.currentPage = 1;
        this.editableProductDTO = new _dto_ProductDTO__WEBPACK_IMPORTED_MODULE_8__["ProductDTO"]();
        this.editableCategory = new _entity_category__WEBPACK_IMPORTED_MODULE_2__["Category"]();
        this.productToDelete = null;
        this.productImgForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroup"]({
            uploadImage: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('')
        });
    }
    ManageProductsComponent.prototype.ngOnInit = function () {
        this.getProducts();
        this.getCategories();
        this.fillEmptyEditableProduct();
    };
    ManageProductsComponent.prototype.getProducts = function () {
        var _this = this;
        this.productService.getProductsPage(this.currentPage)
            .subscribe(function (productsPage) {
            _this.products = productsPage.productsDTO;
            _this.pageAmount = productsPage.totalAmount;
        }, function (error) {
            console.log(error);
        });
    };
    ManageProductsComponent.prototype.loadPage = function (pageNumber) {
        this.getProducts();
    };
    ManageProductsComponent.prototype.getCategories = function () {
        var _this = this;
        this.categoryService.getCategories()
            .subscribe(function (categories) {
            _this.categories = categories;
            _this.editableProductDTO.product.category = _this.categories[0];
        }, function (error) {
            console.log(error);
        });
    };
    ManageProductsComponent.prototype.filterByCategory = function () {
        var _this = this;
        if (this.selectedCategoryId) {
            this.productService.filterProductsByCategory(this.selectedCategoryId)
                .subscribe(function (products) {
                _this.products = products;
            }, function (error) {
                console.log(error);
            });
            return;
        }
        this.getProducts();
    };
    ManageProductsComponent.prototype.saveProduct = function () {
        var _this = this;
        this.editableProductDTO.product.category = this.editableCategory;
        if (this.uploadedFile) {
            this.editableProductDTO.product.photoPath = this.uploadedFile['name'];
            this.productService.saveProductWithImg(this.editableProductDTO.product, this.uploadedFile).subscribe(function (data) {
                _this.getProducts();
            });
        }
        else {
            this.productService.saveProduct(this.editableProductDTO.product).subscribe(function (data) {
                _this.getProducts();
            });
        }
        this.hideChildModal();
    };
    ManageProductsComponent.prototype.deleteProduct = function () {
        var _this = this;
        this.productService.deleteProductById(this.productToDelete).subscribe(function () {
            _this.getProducts();
        }, function (error) {
            _this.errorMsg = error.error.message;
            console.log(error);
        });
        this.hideChildModal();
    };
    ManageProductsComponent.prototype.openDeleteProductForm = function (product) {
        this.productToDelete = product;
        this.openChildModal();
    };
    ManageProductsComponent.prototype.openAddProductForm = function () {
        this.fillEmptyEditableProduct();
        this.productToDelete = null;
        this.openChildModal();
    };
    ManageProductsComponent.prototype.openChildModal = function () {
        this.childModal.show();
        this.getCategories();
    };
    ManageProductsComponent.prototype.hideChildModal = function () {
        this.childModal.hide();
        this.fillEmptyEditableProduct();
        this.productImgForm.controls.uploadImage.reset();
    };
    ManageProductsComponent.prototype.onFileChange = function (event) {
        if (event.target.files.length > 0) {
            var file = event.target.files[0];
            this.uploadedFile = file;
        }
    };
    ManageProductsComponent.prototype.openEditProductForm = function (dto) {
        this.productToDelete = null;
        var product = new _entity_product__WEBPACK_IMPORTED_MODULE_3__["Product"]();
        product.productId = dto.product.productId;
        product.name = dto.product.name;
        product.price = dto.product.price;
        this.editableCategory = dto.product.category;
        product.category = dto.product.category;
        product.photoPath = dto.product.photoPath;
        product.description = dto.product.description;
        product.available = dto.product.available;
        this.editableProductDTO.product = product;
        this.editableProductDTO.imageContent = dto.imageContent;
        this.openChildModal();
    };
    ManageProductsComponent.prototype.fillEmptyEditableProduct = function () {
        this.editableProductDTO.product = new _entity_product__WEBPACK_IMPORTED_MODULE_3__["Product"]();
        this.editableProductDTO.product.category = new _entity_category__WEBPACK_IMPORTED_MODULE_2__["Category"]();
        this.editableProductDTO.imageContent = null;
        this.uploadedFile = null;
        this.editableCategory = new _entity_category__WEBPACK_IMPORTED_MODULE_2__["Category"]();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('productDialog'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ModalDirective"])
    ], ManageProductsComponent.prototype, "childModal", void 0);
    ManageProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-manage-products',
            template: __webpack_require__(/*! ./manage-products.component.html */ "./src/app/navigation/manage-products/manage-products.component.html"),
            styles: [__webpack_require__(/*! ./manage-products.component.css */ "./src/app/navigation/manage-products/manage-products.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"], _service_category_service__WEBPACK_IMPORTED_MODULE_5__["CategoryService"]])
    ], ManageProductsComponent);
    return ManageProductsComponent;
}());



/***/ }),

/***/ "./src/app/navigation/registration/registration.component.css":
/*!********************************************************************!*\
  !*** ./src/app/navigation/registration/registration.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".userLogOrRegForm{\r\n  padding: 2% 35% 0% 35%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2aWdhdGlvbi9yZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBc0I7QUFDeEIiLCJmaWxlIjoic3JjL2FwcC9uYXZpZ2F0aW9uL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi51c2VyTG9nT3JSZWdGb3Jte1xyXG4gIHBhZGRpbmc6IDIlIDM1JSAwJSAzNSU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/navigation/registration/registration.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/navigation/registration/registration.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <form id=\"registrationForm\" class=\"form-signin text-center font-class userLogOrRegForm\" (ngSubmit)=\"saveUser()\">\r\n    <h2 class=\"form-signin-heading\">Account Creation</h2>\r\n    <div>\r\n      <div class=\"alert alert-danger\" *ngIf=\"errorMsg\">\r\n        {{errorMsg}}\r\n      </div>\r\n    </div>\r\n    <label for=\"inputUsername\" class=\"sr-only\">Username</label>\r\n    <input type=\"text\" id=\"inputUsername\" class=\"form-control\" placeholder=\"Username\"\r\n           autofocus=\"true\" name=\"username\" [(ngModel)]=\"user.username\"/>\r\n    <br/>\r\n    <label for=\"inputPassword\" class=\"sr-only\">Password</label>\r\n    <input type=\"password\" id=\"inputPassword\" class=\"form-control\" placeholder=\"Password\" name=\"password\"\r\n           [(ngModel)]=\"user.password\"/>\r\n    <br/>\r\n    <label for=\"confirmPassword\" class=\"sr-only\">Confirmatin Password</label>\r\n    <input type=\"password\" id=\"confirmPassword\" class=\"form-control\" placeholder=\"Password\" name=\"confirmPassword\"\r\n           [(ngModel)]=\"user.confirmPassword\"/>\r\n    <br/>\r\n    <div class=\"text-center\">\r\n      <button class=\"btn btn-primary btn-block\" type=\"submit\">Create an Account</button>\r\n    </div>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/navigation/registration/registration.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/navigation/registration/registration.component.ts ***!
  \*******************************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _entity_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../entity/user */ "./src/app/entity/user.ts");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/user.service */ "./src/app/service/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.user = new _entity_user__WEBPACK_IMPORTED_MODULE_2__["User"]();
    }
    RegistrationComponent.prototype.ngOnInit = function () {
    };
    RegistrationComponent.prototype.saveUser = function () {
        var _this = this;
        this.errorMsg = undefined;
        if (!this.userDataIsValid()) {
            return;
        }
        this.userService.saveUser(this.user).subscribe(function (result) {
            _this.navigateAfterSuccess();
        }, function (error) {
            _this.errorMsg = error.error.message;
        });
    };
    RegistrationComponent.prototype.navigateAfterSuccess = function () {
        this.router.navigate(['/login']);
    };
    RegistrationComponent.prototype.userDataIsValid = function () {
        if (!this.user.username || !this.user.password || !this.user.confirmPassword) {
            this.errorMsg = 'All fields are required';
            return false;
        }
        else if (this.user.password != this.user.confirmPassword) {
            this.errorMsg = 'Password and ConfirmPassword should exactly match';
            return false;
        }
        return true;
    };
    RegistrationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-registration',
            template: __webpack_require__(/*! ./registration.component.html */ "./src/app/navigation/registration/registration.component.html"),
            styles: [__webpack_require__(/*! ./registration.component.css */ "./src/app/navigation/registration/registration.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _service_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], RegistrationComponent);
    return RegistrationComponent;
}());



/***/ }),

/***/ "./src/app/navigation/user-orders/user-orders.component.css":
/*!******************************************************************!*\
  !*** ./src/app/navigation/user-orders/user-orders.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdmlnYXRpb24vdXNlci1vcmRlcnMvdXNlci1vcmRlcnMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/navigation/user-orders/user-orders.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/navigation/user-orders/user-orders.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"font-class text-center\" *ngIf=\"orders.length != 0\">My Orders</h2>\r\n<div class=\"scrollable-content\">\r\n  <div *ngFor=\"let order of orders\">\r\n    <div class=\"font-class\" style=\"margin-left: 1%;\">\r\n      <span>Order ID&nbsp;{{order.orderId}}&nbsp;&nbsp;</span>\r\n      <span>Created date:&nbsp;{{order.date | date: 'dd-MM-yyyy'}}</span>\r\n    </div>\r\n    <table id=\"productsTableHead\" class=\"table font-class product-table fixed_headers category-tree-content\">\r\n      <thead class=\"product-table-header\">\r\n      <tr class=\"text-center\">\r\n        <th scope=\"col\" width=\"15%\">Name</th>\r\n        <th scope=\"col\" width=\"20%\">Photo</th>\r\n        <th scope=\"col\" width=\"15%\">Price</th>\r\n        <th scope=\"col\" width=\"30%\">Description</th>\r\n        <th scope=\"col\" width=\"10%\">Amount</th>\r\n      </tr>\r\n      </thead>\r\n      <tbody id=\"productsTblBody\">\r\n      <tr *ngFor=\"let item of order.groupedProducts\">\r\n        <th scope=\"row\" class=\"text-center\" width=\"15%\">{{item.productDTO.product.name}}</th>\r\n        <td class=\"text-center\" width=\"20%\"><img class=\"product-img\" [src]=\"productService.getProductImage(item.productDTO)\"\r\n                                                 alt=\"No photo ¯\\_(ツ)_/¯\"/></td>\r\n        <td class=\"text-center\" width=\"15%\">{{item.productDTO.product.price | number: '.2'}}</td>\r\n        <td class=\"text-center\" width=\"30%\">{{item.productDTO.product.description}}</td>\r\n        <td class=\"text-center\" width=\"10%\">{{item.amount}}</td>\r\n      </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>\r\n\r\n<div id=\"emptyBasket\" *ngIf=\"orders.length == 0\">\r\n  <div class=\"text-center m-auto\">\r\n    <h3 style=\"color: red;\" class=\"font-class\">O_ops! You have no any orders &#9785;</h3>\r\n    <img src=\"/assets/img/empty_result.jpg\">\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/navigation/user-orders/user-orders.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/navigation/user-orders/user-orders.component.ts ***!
  \*****************************************************************/
/*! exports provided: UserOrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserOrdersComponent", function() { return UserOrdersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_order_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/order.service */ "./src/app/service/order.service.ts");
/* harmony import */ var _dto_orderDTO__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../dto/orderDTO */ "./src/app/dto/orderDTO.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _service_product_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/product.service */ "./src/app/service/product.service.ts");
/* harmony import */ var _dto_OrderItemDTO__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../dto/OrderItemDTO */ "./src/app/dto/OrderItemDTO.ts");








var UserOrdersComponent = /** @class */ (function () {
    function UserOrdersComponent(orderService, productService) {
        this.orderService = orderService;
        this.productService = productService;
        this.orders = [];
    }
    UserOrdersComponent.prototype.ngOnInit = function () {
        this.getUserOrders();
    };
    UserOrdersComponent.prototype.getUserOrders = function () {
        var _this = this;
        this.orderService.getUserOrders().subscribe(function (resultOrders) {
            _this.orders = _this.fillOrdersInfo(resultOrders);
        });
    };
    UserOrdersComponent.prototype.fillOrdersInfo = function (ordersFromResponse) {
        var orderDtoResult = [];
        ordersFromResponse.forEach(function (order) {
            var orderDto = new _dto_orderDTO__WEBPACK_IMPORTED_MODULE_3__["OrderDTO"]();
            orderDto.orderId = order.orderId;
            orderDto.date = order.date;
            var groupedProducts = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(order.productsDTO).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["groupBy"])(function (dto) { return dto.product.productId; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mergeMap"])(function (group) { return group.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["toArray"])()); }));
            var subscribe = groupedProducts.subscribe(function (val) {
                var item = new _dto_OrderItemDTO__WEBPACK_IMPORTED_MODULE_7__["OrderItemDTO"]();
                item.productDTO = val[0];
                item.amount = val.length;
                orderDto.groupedProducts.push(item);
            });
            orderDtoResult.push(orderDto);
        });
        return orderDtoResult;
    };
    UserOrdersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-my-orders',
            template: __webpack_require__(/*! ./user-orders.component.html */ "./src/app/navigation/user-orders/user-orders.component.html"),
            styles: [__webpack_require__(/*! ./user-orders.component.css */ "./src/app/navigation/user-orders/user-orders.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_order_service__WEBPACK_IMPORTED_MODULE_2__["OrderService"], _service_product_service__WEBPACK_IMPORTED_MODULE_6__["ProductService"]])
    ], UserOrdersComponent);
    return UserOrdersComponent;
}());



/***/ }),

/***/ "./src/app/service/authentication.service.ts":
/*!***************************************************!*\
  !*** ./src/app/service/authentication.service.ts ***!
  \***************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");





var TOKEN_AUTH_USERNAME = 'sweetshopclientid';
var TOKEN_AUTH_PASSWORD = 'XY7kmzoNzl100';
var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http) {
        this.http = http;
    }
    AuthenticationService_1 = AuthenticationService;
    AuthenticationService.prototype.login = function (username, password) {
        var body = "username=" + encodeURIComponent(username) + "&password=" + encodeURIComponent(password) + "&grant_type=password";
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('Authorization', 'Basic ' + btoa(TOKEN_AUTH_USERNAME + ':' + TOKEN_AUTH_PASSWORD));
        return this.http.post(AuthenticationService_1.AUTH_TOKEN, body, { headers: headers })
            .map(function (res) { return res.json(); })
            .map(function (res) {
            if (res.access_token) {
                return res.access_token;
            }
            return null;
        });
    };
    var AuthenticationService_1;
    AuthenticationService.AUTH_TOKEN = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + '/oauth/token';
    AuthenticationService = AuthenticationService_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/service/basket-uuid.service.ts":
/*!************************************************!*\
  !*** ./src/app/service/basket-uuid.service.ts ***!
  \************************************************/
/*! exports provided: BasketUUIDService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasketUUIDService", function() { return BasketUUIDService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var BasketUUIDService = /** @class */ (function () {
    function BasketUUIDService() {
        this.basketUUIDName = 'basketUUID';
    }
    BasketUUIDService.prototype.generateUUID = function () {
        var uuidValue = Object(uuid__WEBPACK_IMPORTED_MODULE_2__["v1"])();
        sessionStorage.setItem(this.basketUUIDName, uuidValue);
        return uuidValue;
    };
    BasketUUIDService.prototype.getUUID = function () {
        if (!sessionStorage.getItem(this.basketUUIDName)) {
            this.generateUUID();
        }
        return sessionStorage.getItem(this.basketUUIDName);
    };
    BasketUUIDService.prototype.createHttpParamsWithBasketUuid = function () {
        return new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]().set(this.basketUUIDName, this.getUUID());
    };
    BasketUUIDService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BasketUUIDService);
    return BasketUUIDService;
}());



/***/ }),

/***/ "./src/app/service/basket.service.ts":
/*!*******************************************!*\
  !*** ./src/app/service/basket.service.ts ***!
  \*******************************************/
/*! exports provided: BasketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasketService", function() { return BasketService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _basket_uuid_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./basket-uuid.service */ "./src/app/service/basket-uuid.service.ts");





var BasketService = /** @class */ (function () {
    function BasketService(httpClient, basketUuidService) {
        this.httpClient = httpClient;
        this.basketUuidService = basketUuidService;
        this.addToBasketUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/basket/addToBasket';
        this.deleteProductUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/basket/deleteProduct';
        this.getBasketItemsUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/basket/getBasketItems';
    }
    BasketService.prototype.addProductToBasket = function (products) {
        return this.httpClient.post(this.addToBasketUrl, products, { params: this.basketUuidService.createHttpParamsWithBasketUuid() });
    };
    BasketService.prototype.deleteProductFromBasket = function (products) {
        return this.httpClient.post(this.deleteProductUrl, products, { params: this.basketUuidService.createHttpParamsWithBasketUuid() });
    };
    BasketService.prototype.getBasketItems = function () {
        return this.httpClient.get(this.getBasketItemsUrl, { params: this.basketUuidService.createHttpParamsWithBasketUuid() });
    };
    BasketService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _basket_uuid_service__WEBPACK_IMPORTED_MODULE_4__["BasketUUIDService"]])
    ], BasketService);
    return BasketService;
}());



/***/ }),

/***/ "./src/app/service/category.service.ts":
/*!*********************************************!*\
  !*** ./src/app/service/category.service.ts ***!
  \*********************************************/
/*! exports provided: CategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return CategoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _token_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./token.service */ "./src/app/service/token.service.ts");





var CategoryService = /** @class */ (function () {
    function CategoryService(httpClient, tokenService) {
        this.httpClient = httpClient;
        this.tokenService = tokenService;
        this.categoryUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/api/getCategories';
        this.rootCategoriesUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/admin/getRootCategories';
        this.saveCategoriesUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/admin/saveCategory';
        this.findSubcategoriesUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/admin/findSubcategories/';
        this.deleteCategoryByIdUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/admin/deleteCategory';
    }
    CategoryService.prototype.getCategories = function () {
        return this.httpClient.get(this.categoryUrl);
    };
    CategoryService.prototype.getRootCategories = function () {
        return this.httpClient.get(this.rootCategoriesUrl, { headers: this.tokenService.getHttpHeadersWithToken() });
    };
    CategoryService.prototype.saveCategory = function (category) {
        return this.httpClient.post(this.saveCategoriesUrl, category, { headers: this.tokenService.getHttpHeadersWithToken() });
    };
    CategoryService.prototype.findSubcategories = function (categoryId) {
        return this.httpClient.get(this.findSubcategoriesUrl + categoryId, { headers: this.tokenService.getHttpHeadersWithToken() });
    };
    CategoryService.prototype.deleteCategoryById = function (category) {
        return this.httpClient.post(this.deleteCategoryByIdUrl, category, { headers: this.tokenService.getHttpHeadersWithToken() });
    };
    CategoryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _token_service__WEBPACK_IMPORTED_MODULE_4__["TokenService"]])
    ], CategoryService);
    return CategoryService;
}());



/***/ }),

/***/ "./src/app/service/order.service.ts":
/*!******************************************!*\
  !*** ./src/app/service/order.service.ts ***!
  \******************************************/
/*! exports provided: OrderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderService", function() { return OrderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _basket_uuid_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./basket-uuid.service */ "./src/app/service/basket-uuid.service.ts");
/* harmony import */ var _token_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./token.service */ "./src/app/service/token.service.ts");






var OrderService = /** @class */ (function () {
    function OrderService(httpClient, basketUUIDService, tokenService) {
        this.httpClient = httpClient;
        this.basketUUIDService = basketUUIDService;
        this.tokenService = tokenService;
        this.saveOrderUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + '/order/save';
        this.getOrdersUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + '/order/getOrders';
    }
    OrderService.prototype.saveOrder = function () {
        return this.httpClient.post(this.saveOrderUrl, {}, {
            headers: this.tokenService.getHttpHeadersWithToken(),
            params: this.basketUUIDService.createHttpParamsWithBasketUuid()
        });
    };
    OrderService.prototype.getUserOrders = function () {
        return this.httpClient.get(this.getOrdersUrl, {
            headers: this.tokenService.getHttpHeadersWithToken()
        });
    };
    OrderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _basket_uuid_service__WEBPACK_IMPORTED_MODULE_4__["BasketUUIDService"], _token_service__WEBPACK_IMPORTED_MODULE_5__["TokenService"]])
    ], OrderService);
    return OrderService;
}());



/***/ }),

/***/ "./src/app/service/product.service.ts":
/*!********************************************!*\
  !*** ./src/app/service/product.service.ts ***!
  \********************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _token_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./token.service */ "./src/app/service/token.service.ts");
/* harmony import */ var _global_properties__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../global-properties */ "./src/app/global-properties.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");








var ProductService = /** @class */ (function () {
    function ProductService(httpClient, tokenService, sanitizer) {
        this.httpClient = httpClient;
        this.tokenService = tokenService;
        this.sanitizer = sanitizer;
        this.getProductsUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/api/getProducts';
        this.getProductsPageUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/api/getProductsPage';
        this.filterProductsUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/api/filterProducts/';
        this.saveProductUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/admin/saveProduct';
        this.saveProductWithImgUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/admin/saveProductWithImg';
        this.productByIdUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/api/getProductById/';
        this.deleteProductByIdUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/admin/deleteProduct';
    }
    ProductService.prototype.getProducts = function () {
        return this.httpClient.get(this.getProductsUrl);
    };
    ProductService.prototype.getProductsPage = function (pageNumber) {
        var pageIndex = pageNumber - 1;
        var httpParams = { 'pageIndex': pageIndex.toString(), 'pageSize': _global_properties__WEBPACK_IMPORTED_MODULE_5__["PRODUCT_PAGE_SIZE"] };
        return this.httpClient.get(this.getProductsPageUrl, { params: httpParams });
    };
    ProductService.prototype.filterProductsByCategory = function (categoryId) {
        return this.httpClient.get(this.filterProductsUrl + categoryId);
    };
    ProductService.prototype.saveProduct = function (product) {
        return this.saveProductRequest(product, this.saveProductUrl);
    };
    ProductService.prototype.saveProductWithImg = function (product, img) {
        var formData = new FormData();
        formData.append('file', img);
        formData.append('editableProduct', JSON.stringify(product));
        return this.saveProductRequest(formData, this.saveProductWithImgUrl);
    };
    ProductService.prototype.getProductById = function (productId) {
        return this.httpClient.get(this.productByIdUrl + productId);
    };
    ProductService.prototype.deleteProductById = function (product) {
        return this.httpClient.post(this.deleteProductByIdUrl, product, { headers: this.tokenService.getHttpHeadersWithToken() });
    };
    ProductService.prototype.getProductImage = function (product) {
        return this.sanitizer.bypassSecurityTrustUrl(_global_properties__WEBPACK_IMPORTED_MODULE_5__["IMAGE_TYPE"] + product.imageContent);
    };
    ProductService.prototype.saveProductRequest = function (requestBody, saveProductUrl) {
        return this.httpClient.post(saveProductUrl, requestBody, { headers: this.tokenService.getHttpHeadersWithToken() });
    };
    ProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _token_service__WEBPACK_IMPORTED_MODULE_4__["TokenService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "./src/app/service/token.service.ts":
/*!******************************************!*\
  !*** ./src/app/service/token.service.ts ***!
  \******************************************/
/*! exports provided: TokenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenService", function() { return TokenService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _global_properties__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../global-properties */ "./src/app/global-properties.ts");





var TokenService = /** @class */ (function () {
    function TokenService(jwtHelperService) {
        this.jwtHelperService = jwtHelperService;
    }
    TokenService.prototype.getHttpHeadersWithToken = function () {
        return new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', this.getToken());
    };
    TokenService.prototype.getToken = function () {
        var token = this.jwtHelperService.tokenGetter();
        if (token != null) {
            if (!this.isTokenExpired(token)) {
                return token;
            }
        }
        localStorage.removeItem(_global_properties__WEBPACK_IMPORTED_MODULE_4__["TOKEN_NAME"]);
        return this.jwtHelperService.tokenGetter();
    };
    TokenService.prototype.isTokenExpired = function (token) {
        return this.jwtHelperService.isTokenExpired(token);
    };
    TokenService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"]])
    ], TokenService);
    return TokenService;
}());



/***/ }),

/***/ "./src/app/service/user.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/user.service.ts ***!
  \*****************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-jwt */ "./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_jwt__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _token_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./token.service */ "./src/app/service/token.service.ts");






var TOKEN_NAME = 'access_token';
var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var UserService = /** @class */ (function () {
    function UserService(httpClient, tokenService) {
        this.httpClient = httpClient;
        this.tokenService = tokenService;
        this.jwtHelper = new angular2_jwt__WEBPACK_IMPORTED_MODULE_2__["JwtHelper"]();
        this.saveUserUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + '/api/registration';
    }
    UserService.prototype.login = function (accessToken) {
        var decodedToken = this.jwtHelper.decodeToken(accessToken);
        console.log(decodedToken);
        localStorage.setItem(TOKEN_NAME, accessToken);
    };
    UserService.prototype.logout = function () {
        localStorage.removeItem(TOKEN_NAME);
    };
    UserService.prototype.saveUser = function (user) {
        return this.httpClient.post(this.saveUserUrl, user, httpOptions);
    };
    UserService.prototype.isAdmin = function () {
        return this.hasRole('ROLE_ADMIN');
    };
    UserService.prototype.getCurrentUsername = function () {
        return this.getDecodedToken() ? this.getDecodedToken().user_name : null;
    };
    UserService.prototype.hasRole = function (roleName) {
        var result = false;
        if (this.getDecodedToken()) {
            var authorities = this.getDecodedToken().authorities;
            authorities.forEach(function (value) {
                if (value == roleName) {
                    result = true;
                }
            });
        }
        return result;
    };
    UserService.prototype.getDecodedToken = function () {
        if (localStorage.getItem(TOKEN_NAME)) {
            return this.jwtHelper.decodeToken(this.tokenService.getToken());
        }
        return null;
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _token_service__WEBPACK_IMPORTED_MODULE_5__["TokenService"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    apiUrl: 'http://localhost:8080'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Настя\Git_repository\Portfolio\sweet-shop-frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map