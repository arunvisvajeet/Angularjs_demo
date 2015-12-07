define(['angularAMD', 'angular-route'], function (angularAMD) {
    var app = angular.module("webapp", ['ngRoute']);
    app.config(function ($routeProvider) {
        $routeProvider
            .when("/home", angularAMD.route({
                templateUrl: 'ui/module/home/html/view_home.html',
                controller: 'homeController as homeCtrl',
                controllerUrl: 'ui/module/home/js/controller_home'
            }))
            .when("/details", angularAMD.route({
                templateUrl: 'ui/module/details/html/view_details.html',
                controller: 'detailsController as detailsCtrl',
                controllerUrl: 'ui/module/details/js/controller_details'
            }))
            .otherwise({ redirectTo: "/home" });
    });
    registerLayoutController(app);
    return angularAMD.bootstrap(app);
});

function registerLayoutController(app) {
    var layoutController = function ($scope, $http) {
        var _this = this;
        _this.name = "layoutController";
        _this.$scope = $scope;
        _this.$http = $http;
        _this.data = {};
        _this.worker = {
            init: function () {
                _this.data.message = "home";
            },
            getApiData: function () {
                _this.$http.get('https://nutanix.0x10.info/api/deals?type=json&query=api_hits').success(function (data) {
                    _this.data.apiHit = data;
                });
            }
        };
        (function () {
            _this.worker.init();
            _this.worker.getApiData();
        })();
    }
    layoutController.$inject = ["$scope", "$http"];
    app.controller("layoutController", layoutController);
    var body = document.getElementsByTagName('body')[0]
    body.setAttribute("ng-controller", "layoutController as layoutCtrl");
}