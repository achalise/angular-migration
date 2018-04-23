import * as angular from 'angular';
import { downgradeComponent } from '@angular/upgrade/static';
import { IDirectiveFactory } from 'angular';
import { AccountDetailComponent } from '../app/account-detail/account-detail.component';

import HomeController from './home/home-cotroller';
import { routeConfig } from './routes';

import uiRouter from  '@uirouter/angularjs';



const ngApplication = angular.module('tsangularjs', [ uiRouter ])
    .run(() => console.log(`AngularJS is running in hybrid environment`))
    .controller('HomeController', HomeController)
    .directive('accountDetail', downgradeComponent({ component: AccountDetailComponent }) as IDirectiveFactory)
    .config(routeConfig);

export default ngApplication.name;


