import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { MerchantComponent } from './merchant/merchant.component';
import { ActivateGuard } from './activate.guard';
import { UserService } from './user.service';
import { approutes } from './routing';
import { RouterModule } from "@angular/router";
import { DeactivateGuard } from './deactivate.guard';
import { CustomerComponent } from './customer/customer.component';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { ActivatechildGuard } from './activatechild.guard';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    MerchantComponent,
    CustomerComponent,
    AddcustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(approutes)
  ],
  providers: [ActivateGuard,UserService,DeactivateGuard,ActivatechildGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
