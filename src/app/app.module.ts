import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { StoreModule } from './store/store.module';
import { StoreComponent } from './store/store.component';
import { CheckoutComponent } from './store/checkout.component';
import { CartDetailComponent } from './store/cartDetail.component';
import { RouterModule } from '@angular/router';
import { StoreGuardian } from './store.guardian';
import { registerLocaleData } from '@angular/common';
import localePL from '@angular/common/locales/pl';
registerLocaleData(localePL);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    StoreModule,
    RouterModule.forRoot([
      { path: 'store', component: StoreComponent, canActivate: [StoreGuardian] },
      { path: 'cart', component: CartDetailComponent, canActivate: [StoreGuardian] },
      { path: 'checkout', component: CheckoutComponent, canActivate: [StoreGuardian] },
      { path: '**', redirectTo: '/store' },
    ]),
  ],
  providers: [StoreGuardian],
  bootstrap: [AppComponent],
})
export class AppModule {}
