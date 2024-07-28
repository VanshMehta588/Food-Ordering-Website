import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { UserAuthComponent } from './user-auth/user-auth.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientModule } from '@angular/common/http';
import { RatingModule } from 'ng-starrating';
import { AdminComponent } from './admin/admin.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { SidenavComponent } from './admin-panel/sidenav/sidenav.component';
import { ProductsComponent } from './admin-panel/products/products.component';
import { CoupensComponent } from './admin-panel/coupens/coupens.component';
import { DashboardComponent } from './admin-panel/dashboard/dashboard.component';
import { StatisticsComponent } from './admin-panel/statistics/statistics.component';
import { MediaComponent } from './admin-panel/media/media.component';
import { SettingsComponent } from './admin-panel/settings/settings.component';
import { PagesComponent } from './admin-panel/pages/pages.component';
import { CommonModule } from '@angular/common';
import { BodyComponent } from './admin-panel/body/body.component';
import { CartPageComponent } from './pages/menu/cart-page/cart-page.component';
import { FoodPageComponent } from './pages/menu/food-page/food-page.component';
import { NotFoundComponent } from './pages/menu/not-found/not-found.component';
import { SearchComponent } from './pages/menu/search/search.component';
import { TagsComponent } from './pages/menu/tag/tags.component';
import { AdminHomeComponent } from './pages/menu/admin-home/admin-home.component';
import { filter } from 'rxjs/operators';
import { SellerUpdateItemComponent } from './admin-panel/products/seller-update-item/seller-update-item.component';
import { SellerAddItemComponent } from './admin-panel/products/seller-add-item/seller-add-item.component';
import { UserDetailsComponent } from './admin-panel/user-details/user-details.component';
import { CheckoutPageComponent } from './pages/menu/checkout-page/checkout-page.component';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { UserSidenavComponent } from './user-panel/user-sidenav/user-sidenav.component';
import { UserDashboardComponent } from './user-panel/user-dashboard/user-dashboard.component';
import { UserBodyComponent } from './user-panel/user-body/user-body.component';
import { UserOrdersComponent } from './user-panel/user-orders/user-orders.component';
import { UserSettingsComponent } from './user-panel/user-settings/user-settings.component';
import { UserInfoComponent } from './user-panel/user-info/user-info.component';
import { UserUpdateInfoComponent } from './user-update-info/user-update-info.component';
import { InvoiceComponent } from './pages/menu/invoice/invoice.component';
import { GooglePayButtonModule } from '@google-pay/button-angular';
import { NgxPrintModule } from 'ngx-print';





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    MenuComponent,
    AboutComponent,
    ContactComponent,
    UserAuthComponent,
    SellerAddItemComponent,
    AdminComponent,
    AdminPanelComponent,
    SidenavComponent,
    ProductsComponent,
    CoupensComponent,
    DashboardComponent,
    StatisticsComponent,
    MediaComponent,
    SettingsComponent,
    PagesComponent,
    BodyComponent,
    CartPageComponent,
    FoodPageComponent,
    AdminHomeComponent,
    NotFoundComponent,
    SearchComponent,
    TagsComponent,
    SellerUpdateItemComponent,
    UserDetailsComponent,
    CheckoutPageComponent,
    UserPanelComponent,
    UserSidenavComponent,
    UserDashboardComponent,
    UserBodyComponent,
    UserOrdersComponent,
    UserSettingsComponent,
    UserInfoComponent,
    UserUpdateInfoComponent,
    InvoiceComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    RatingModule,
    BrowserAnimationsModule,
    GooglePayButtonModule,
    NgxPrintModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
