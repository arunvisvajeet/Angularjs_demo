define(['app'], function (app) {
    var detailsController = function ($scope, $http) {
        var _this = this;
        _this.name = "detailsController";
        _this.$scope = $scope;
        _this.$http = $http;
        _this.data = {};
        _this.worker = {
            init: function () {
                _this.data.message  = "Message from View1Ctrl";
            },
            getData: function () {
                _this.$http.get('https://nutanix.0x10.info/api/deals?type=json&query=list_deals').success(function (data) {
                    _this.data.itemlist = data;
                });
            }
        };
        (function () {
            _this.worker.init();
            _this.worker.getData();
        })();
    }
    detailsController.$inject = ["$scope", "$http"];
    app.controller("detailsController", detailsController);
});
