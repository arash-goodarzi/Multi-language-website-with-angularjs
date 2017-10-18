/**
 * Created by Aurash on 2017-10-11.
 */
(function () {
    "use strict";
    angular
        .module("productManagement")
        .controller("eventsCtrl",
        ["productResource","$translate","$scope","$rootScope",
            eventsCtrl]);

    function eventsCtrl(productResource,$translate,$scope,$rootScope) {
        var vm = this;

        $scope.changeLanguage=function(key){
            alert(key);
            $translate.use(key);
        };

        $rootScope.$on("changeLanguages",function(e,data){
            $translate.use(data.lan);
        });

        /*vm.changeLanguage = function (key) {
            $translate.use(key);
            alert('mmm');
        };*/

    }
}());