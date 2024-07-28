import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { CoupensComponent } from './admin-panel/coupens/coupens.component';
import { DashboardComponent } from './admin-panel/dashboard/dashboard.component';
import { MediaComponent } from './admin-panel/media/media.component';
import { PagesComponent } from './admin-panel/pages/pages.component';
import { ProductsComponent } from './admin-panel/products/products.component';
import { SettingsComponent } from './admin-panel/settings/settings.component';
import { StatisticsComponent } from './admin-panel/statistics/statistics.component';
import { AdminComponent } from './admin/admin.component';
import { AdminGuard } from './adminservices/admin.guard';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { AdminHomeComponent } from './pages/menu/admin-home/admin-home.component';
import { CartPageComponent } from './pages/menu/cart-page/cart-page.component';
import { FoodPageComponent } from './pages/menu/food-page/food-page.component';
import { MenuComponent } from './pages/menu/menu.component';
import { UserAuthComponent } from './user-auth/user-auth.component';
import { SellerUpdateItemComponent } from './admin-panel/products/seller-update-item/seller-update-item.component';
import { SellerAddItemComponent } from './admin-panel/products/seller-add-item/seller-add-item.component';
import { UserDetailsComponent } from './admin-panel/user-details/user-details.component';
import { CheckoutPageComponent } from './pages/menu/checkout-page/checkout-page.component';
import { UserDashboardComponent } from './user-panel/user-dashboard/user-dashboard.component';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { UserOrdersComponent } from './user-panel/user-orders/user-orders.component';
import { UserSettingsComponent } from './user-panel/user-settings/user-settings.component';
import { UserInfoComponent } from './user-panel/user-info/user-info.component';
import { UserUpdateInfoComponent } from './user-update-info/user-update-info.component'
import { InvoiceComponent } from './pages/menu/invoice/invoice.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'menu',component:MenuComponent,
    children:[
      {path:'',redirectTo:'menu-page',pathMatch:'full'},
      {path:'menu-page',component:AdminHomeComponent},

      {path:'search/:searchItem',component:AdminHomeComponent},
      {path:'tag/:tag',component:AdminHomeComponent},
      {path:'food/:id',component:FoodPageComponent},
      {path:'cart-page',component:CartPageComponent},
      {path:'checkout-page',component:CheckoutPageComponent},
      {path:'invoice',component:InvoiceComponent}
    ]},
    {path:'about',component:AboutComponent},
    {path:'contact',component:ContactComponent},
    {path:'user-auth',component:UserAuthComponent},
    {path:'admin',component:AdminComponent},
    {path:'admin-dashboard',component:AdminPanelComponent,
    canActivate:[AdminGuard],
    children:[
      {path:'',redirectTo:'dashboard',pathMatch:'full'},
      {path:'dashboard',component:DashboardComponent},
      {path:'coupens',component:CoupensComponent},
      {path:'selleradd',component:SellerAddItemComponent},
      {path:'sellerupdate/:id',component:SellerUpdateItemComponent},
      {path:'media',component:MediaComponent},
      {path:'pages',component:PagesComponent},
      {path:'products',component:ProductsComponent},
      {path:'userdetail',component:UserDetailsComponent},
      {path:'settings',component:SettingsComponent},
      {path:'statistics',component:StatisticsComponent},
   ]
},
    {path:'user-panel',component:UserPanelComponent,
    children:[
      {path:'',redirectTo:'user-dashboard',pathMatch:'full'},
      {path:'user-dashboard',component:UserDashboardComponent},
      {path:'user-orders',component:UserOrdersComponent},
      {path:'user-settings',component:UserSettingsComponent},
      {path:'user-info',component:UserInfoComponent},
      {path:'user-update-info/:id',component:UserUpdateInfoComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
