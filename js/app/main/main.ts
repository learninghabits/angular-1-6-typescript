(() => {    
    let controller : ($http, $location) => void  
    = function ($http, $location) {  
        let vm = this;
        $http.get("https://api.github.com/users/learninghabits")
            .then(response => {
                let user : {} = {
                    login: response.data.login,
                    avatar_url: response.data.avatar_url,
                    name: response.data.name
                };
                vm.user = user;
                vm.gotoRepos = function (login: string) {
                    $location.url(`/repos/${login}`);
                }
            });
    };    
    let app : angular.IModule = angular.module("applicationHost");
    app.component('main', {
        templateUrl: 'js/app/main/main.html',
        bindings: {},
        controller: controller
    });
})();