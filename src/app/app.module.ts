import 'angular';
import { UpgradeModule } from '@angular/upgrade/static';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import Ng1ModuleName from '../ng1/app';
import { AccountDetailComponent } from './account-detail/account-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    AccountDetailComponent
  ],
  imports: [
    BrowserModule,
    UpgradeModule
  ],
  providers: [],
  bootstrap: [],
  entryComponents: [
      AccountDetailComponent
  ]
})
export class AppModule {
  constructor(private upgrade: UpgradeModule) {}

  ngDoBootstrap() {
    this.upgrade.bootstrap(document.body, [Ng1ModuleName]);
  }
}
