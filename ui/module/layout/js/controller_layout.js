define(['app'], function (app) {
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
    body.setAttribute("ng-controller", "layoutController");
});
