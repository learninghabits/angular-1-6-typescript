 declare var document: Document;
 declare var _;

(() => {    
    let app : angular.IModule = angular.module('applicationHost', ['ngRoute']); //-- the array is a list of dependendencies required by this application   
    app.config($routeProvider => {
        $routeProvider
            .when('/', {
                template: '<main></main>'
            })
            .when('/repos/:login', {
                template: '<repos></repos>'
            })
            .otherwise({ redirectTo: '/' });
    });

    angular.element(document).ready(() => {
        angular.bootstrap(document.body, ['applicationHost']);
    });
})();