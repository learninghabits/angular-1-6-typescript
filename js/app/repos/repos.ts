(() => {  
    let controller : ($http, $routeParams) => void 
    = function ($http, $routeParams) {
        let vm = this;
        let url: string = 'https://api.github.com/users/' + $routeParams.login + '/repos';
        $http.get(url)
            .then(response => {
                vm.repos = response.data;
            });
    };
    let app: angular.IModule = angular.module("applicationHost"); //getting the main application module
    app.component("repos", {
        templateUrl: 'js/app/repos/repos.html',
        bindings: {},
        controller: controller
    });
})();