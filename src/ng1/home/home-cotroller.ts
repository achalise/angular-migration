import { IScope } from 'angular';

export default class HomeController {
    static $inject = ['$scope'];

    message:string;
    accounts: any[] = [];
    constructor(private $scope: IScope) {
        console.log(`HomeController initialised`);
        console.log('The scope is ' + $scope);
        this.message = 'Hello from hello controller';
        this.accounts.push(...[{name: 'account one'}, {name: 'account two'}, {name: 'account three'}]);
    }

}