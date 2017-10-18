/**
 * Created by Aurash on 2017-10-04.
 */
(function () {
    "use strict";
    angular
        .module("productManagement")
        .controller("ProductListCtrl",
        ["productResource","$translate","$scope","$rootScope",
            ProductListCtrl]);

    function ProductListCtrl(productResource,$translate,$scope,$rootScope) {
        var vm = this;

        productResource.query(function(data) {
            vm.products = data;
        });
        vm.showImage = false;

        vm.toggleImage = function() {
            vm.showImage = !vm.showImage;
        }

        $rootScope.$on("changeLanguages",function(e,data){
            $translate.use(data.lan);
        });
    }
}());