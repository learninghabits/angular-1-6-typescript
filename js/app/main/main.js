(function () {
    var controller = function ($http, $location) {
        var vm = this;
        $http.get("https://api.github.com/users/learninghabits")
            .then(function (response) {
            var user = {
                login: response.data.login,
                avatar_url: response.data.avatar_url,
                name: response.data.name
            };
            vm.user = user;
            vm.gotoRepos = function (login) {
                $location.url("/repos/" + login);
            };
        });
    };
    var app = angular.module("applicationHost");
    app.component('main', {
        templateUrl: 'js/app/main/main.html',
        bindings: {},
        controller: controller
    });
})();
//# sourceMappingURL=main.js.map