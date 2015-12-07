define(['app'], function (app) {
    var homeController = function ($scope, $http) {
        var _this = this;
        _this.name = "homeController";
        _this.$scope = $scope;
        _this.$http = $http;
        _this.data = {};
        _this.worker = {
            init: function () {
                _this.data.message = "home";
            },
            getProductData: function () {
                _this.$http.get('https://nutanix.0x10.info/api/deals?type=json&query=list_deals').success(function (data) {
                    _this.data.itemlist = data;
                });
            }
        };
        (function () {
            _this.worker.init();
           _this.worker.getProductData();
        })();
    }
    homeController.$inject = ["$scope", "$http"];
    app.controller("homeController", homeController);
});
