(function () {
    var controller = function ($http, $routeParams) {
        var vm = this;
        var url = 'https://api.github.com/users/' + $routeParams.login + '/repos';
        $http.get(url)
            .then(function (response) {
            vm.repos = response.data;
        });
    };
    var app = angular.module("applicationHost"); //getting the main application module
    app.component("repos", {
        templateUrl: 'js/app/repos/repos.html',
        bindings: {},
        controller: controller
    });
})();
//# sourceMappingURL=repos.js.map