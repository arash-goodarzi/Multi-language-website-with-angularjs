/**
 * Created by Aurash on 2017-10-04.
 */
(function () {
    "use strict";
    var app = angular.module("productManagement",
        ["common.services",
            "ui.router",
            "ui.mask",
            "ui.bootstrap",
            "angularCharts",
            "pascalprecht.translate",
            "productResourceMock"]);

    app.config(["$stateProvider",
            "$urlRouterProvider",
            function ($stateProvider, $urlRouterProvider) {
                $urlRouterProvider.otherwise("/");

                $stateProvider
                    .state("home", {
                        url: "/",
                        templateUrl: "app/welcomeView.html"
                    })
                    // Products
                    .state("productList", {
                        url: "/products",
                        templateUrl: "app/products/productListView.html",
                        controller: "ProductListCtrl as vm"
                    })
                    .state("productEdit", {
                        abstract: true,
                        url: "/products/edit/:productId",
                        templateUrl: "app/products/productEditView.html",
                        controller: "ProductEditCtrl as vm",
                        resolve: {
                            productResource: "productResource",

                            product: function (productResource, $stateParams) {
                                var productId = $stateParams.productId;
                                return productResource.get({ productId: productId }).$promise;
                            }
                        }
                    })
                    .state("productEdit.info", {
                        url: "/info",
                        templateUrl: "app/products/productEditInfoView.html"
                    })
                    .state("productEdit.price", {
                        url: "/price",
                        templateUrl: "app/products/productEditPriceView.html"
                    })
                    .state("productEdit.tags", {
                        url: "/tags",
                        templateUrl: "app/products/productEditTagsView.html"
                    })

                    .state("productDetail", {
                        url: "/products/:productId",
                        templateUrl: "app/products/productDetailView.html",
                        controller: "ProductDetailCtrl as vm",
                        resolve: {
                            productResource: "productResource",

                            product: function (productResource, $stateParams) {
                                var productId = $stateParams.productId;
                                return productResource.get({ productId: productId }).$promise;
                            }
                        }
                    })
                    // Location
                    .state("locationPosition", {
                        url: "/location",
                        templateUrl: "app/location/locationView.html",
                        controller: "locationCtrl as vm"
                    })
                    // Events
                    .state("eventShow",{
                        url: "/events",
                        templateUrl: "app/events/eventsView.html",
                        controller: "eventsCtrl as vm"
                    })
                    // Popular
                    .state("analytics",{
                        url: "/analytic",
                        templateUrl: "app/analytic/analyticView.html",
                        controller: "analyticCtrl as vm",
                        resolve: {
                            productResource: "productResource",

                            products: function (productResource) {
                                return productResource.query().$promise;
                            }
                        }
                    })

            }]);


    app.config(function ($translateProvider) {
        $translateProvider.fallbackLanguage('en');
        $translateProvider.registerAvailableLanguageKeys(['en','fr','pe'],{
            'en_*':'en',
            'fr_*':'fr',
            'pe_*':'pe'
        })
        $translateProvider.translations('en', {
            QUESTION: 'Book',
            TITLE: 'Hello',
            BUTTON_LANG_EN: 'english',
            BUTTON_LANG_DE: 'german',
            FOO:'Arash',
            LOCATION:'Location',
            PRODUCT:'Product',
            SPECIAL:'SPECIAL',
            WHATDIDULIKE:'What Did You like'
        });
        $translateProvider.translations('fr', {
            QUESTION: 'livre',
            TITLE: 'Salut',
            BUTTON_LANG_EN: 'englisch',
            BUTTON_LANG_DE: 'deutsch',
            FOO:'Akish',
            LOCATION:'Location',
            PRODUCT:'Produit',
            SPECIAL:'Occasion',
            WHATDIDULIKE:'Vous aimé?'
        });
        $translateProvider.translations('pe', {
            QUESTION: 'کتاب',
            TITLE: 'سلام',
            BUTTON_LANG_EN: 'englisch',
            BUTTON_LANG_DE: 'deutsch',
            FOO:'آرش',
            LOCATION:'ما کجا هستیم',
            PRODUCT:'غذاهای ما',
            SPECIAL:'مناسبتهای این ماه',
            WHATDIDULIKE:'آنچه شما بیشتر پسندیدید'
        });
        $translateProvider.preferredLanguage('pe');
/*

 var allLanguages={en:{
         TITLE: 'Hello',
         FOO: 'This is a paragraph.',
         BUTTON_LANG_EN: 'english',
         BUTTON_LANG_DE: 'german'
         },
         fr:{
         TITLE: 'Salut',
         FOO: 'Dies ist ein Paragraph.',
         BUTTON_LANG_EN: 'englisch',
         BUTTON_LANG_DE: 'deutsch'
         },
         pe:{
         TITLE: 'سلام',
         FOO: 'Dies ist ein Paragraph.',
         BUTTON_LANG_EN: 'englisch',
         BUTTON_LANG_DE: 'deutsch'
         }};

            var allLanguages=[];
        allLanguages["en"]={
                TITLE: 'Hello',
                FOO: 'This is a paragraph.',
                BUTTON_LANG_EN: 'english',
                BUTTON_LANG_DE: 'german'
            };

            allLanguages["pe"]= {
                TITLE: 'سلام',
                FOO: 'Dies ist ein Paragraph.',
                BUTTON_LANG_EN: 'englisch',
                BUTTON_LANG_DE: 'deutsch'
            };

        allLanguages["fr"]= {
            TITLE: 'Salut',
                FOO: 'Dies ist ein Paragraph.',
                BUTTON_LANG_EN: 'englisch',
                BUTTON_LANG_DE: 'deutsch'
        };

//        allLanguages.filter(function(l){ return l.language == "en" })[0].value

        $translateProvider.translations('en', allLanguages["en"]);
        $translateProvider.translations('fr', allLanguages["fr"]);
        $translateProvider.translations('pe', allLanguages["pe"]);

        $translateProvider.preferredLanguage('en');*/





    });
}());
