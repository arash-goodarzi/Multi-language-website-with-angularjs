/**
 * Created by Aurash on 2017-10-12.
 */
(function () {
    "use strict";

    angular
        .module("common.services")
        .factory("changeLanguage",
        ["$scope", "$translate",
            changeLanguage]);

    function changeLanguage($scope, $translate) {
        return {
            restrict: 'E',
            replace: true,
            template: '<div></div>',
            link: function($scope, element, attrs) {
                $scope.clickMe= function() {
                    alert('inside click');
                }
            }
            /*change:function(key){
                $translate.use(key);
            }*/
        }
    }

}());