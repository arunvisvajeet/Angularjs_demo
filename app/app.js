 var webApp = angular.module("webApp", ['ui.router']);
 webApp.config(function ($stateProvider) {

     $stateProvider.state("login", {
             url: "/login",
             views: {
                 '': {
                     templateUrl: "../ui/module/login/html/login.html"

                 }

             }
         })
         .state("about", {});
     $stateProvider.run(['$state', function ($state) {
         $state.transitionTo('login');
}])
 });
