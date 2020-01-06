import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { MerchantComponent } from './merchant/merchant.component';

@Injectable({
  providedIn: 'root'
})
export class DeactivateGuard implements CanDeactivate <MerchantComponent>{
  canDeactivate(): boolean {
    return window.confirm('are you sure want to navigate ?');
  }
}
  

