/**
 * Created by Aurash on 2017-10-08.
 */
(function () {
    "use strict";
    angular
        .module("productManagement")
        .controller("locationCtrl",
        ["productResource","$translate","$scope","$rootScope",
locationCtrl]);

    function locationCtrl(productResource,$translate, $scope ,$rootScope) {
        var vm = this;

        $rootScope.$on("changeLanguages",function(e,data){
            $translate.use(data.lan);
        });

    }
}());