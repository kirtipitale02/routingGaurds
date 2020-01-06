import { Routes} from "@angular/router";
import { HomeComponent} from "./home/home.component";
import { AdminComponent} from "./admin/admin.component";
import { ActivateGuard } from "./activate.guard";
import { MerchantComponent } from './merchant/merchant.component';
import { DeactivateGuard } from './deactivate.guard';
import { CustomerComponent } from './customer/customer.component';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { ActivatechildGuard } from './activatechild.guard';

export const approutes:Routes=[
    {path:'',component:HomeComponent},
    {path:'home',component:HomeComponent},
    {path:'admin',component:AdminComponent,canActivate:[ActivateGuard]},
    {path:'merchant',component:MerchantComponent,canDeactivate:[DeactivateGuard]},
    {path:'customer',component:CustomerComponent,canActivateChild:[ActivatechildGuard],
    children:[
        {path:"addcustomer", component:AddcustomerComponent},
    ],
}
];