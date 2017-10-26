/**
 * Created by Aurash on 2017-10-26.
 */
(function () {
    "use strict";
    angular
        .module("productManagement")
        .controller("mainCtrl",
        ["productResource","$translate","$scope","$rootScope",
            mainCtrl]);

    function mainCtrl(productResource,$translate,$scope,$rootScope) {
        var vm = this;

        $rootScope.$on("changeLanguages",function(e,data){
            $translate.use(data.lan);
        });
    }
}());