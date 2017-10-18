/**
 * Created by Aurash on 2017-10-11.
 */
(function () {
    "use strict";
    angular
        .module("productManagement")
        .controller("analyticCtrl",
        ["$scope","productResource","products","$filter","$rootScope","$translate",
            analyticCtrl]);

    function analyticCtrl($scope,productResource,products,$filter,$rootScope,$translate) {
        var vm = this;


        $scope.title="Favourite foods";

        var orderProduct=$filter("orderBy")(products, "price");
        var filterProduct=$filter("limitTo")(orderProduct,5);



        var chartDataAmount = [];
        for (var i = 0; i < filterProduct.length; i++) {
            chartDataAmount.push({
                x: filterProduct[i].productName,
                y: [filterProduct[i].cost,
                    filterProduct[i].price]
            });
        }

        $scope.dataAmount = {
            series: ["Cost", "Price"],
            data: chartDataAmount
        };

        $scope.configAmount = {
            title: "Top $ Margin Products",
            tooltips: true,
            labels: false,
            mouseover: function () { },
            mouseout: function () { },
            click: function () { },
            legend: {
                display: true,
                position: "right"
            }
        };

        $rootScope.$on("changeLanguages",function(e,data){
            $translate.use(data.lan);
        });

    }
}());