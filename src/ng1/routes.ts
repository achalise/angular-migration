import { ILocationProvider } from 'angular';
import { IState, IStateProvider, IUrlRouterProvider } from 'angular-ui-router';

export function routeConfig($locationProvider: ILocationProvider,
                            $stateProvider: IStateProvider,
                            $urlRouterProvider: IUrlRouterProvider) {
    $stateProvider.state(
        'home', <IState>{
            url: '/',
            controller: 'HomeController',
            controllerAs: 'vm',
            templateUrl: './home/home-template.html'
        }
    );
    $urlRouterProvider.when('', '/');
}

routeConfig.$inject = [ '$locationProvider', '$stateProvider', '$urlRouterProvider' ];