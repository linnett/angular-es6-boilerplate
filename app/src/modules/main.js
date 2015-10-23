'use strict';

// Import the Vendor Specific Scripts e.g. jQuery
import './vendor';

let app = angular.module('app', [
  'ui.router'
])
.config(($stateProvider, $urlRouterProvider)=>{
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "modules/pages/page-home/page-home.html",
      controller: ($scope) => {
        $scope.test = "HOME";
      }
    })
    .state('test', {
      url: "/test",
      templateUrl: "modules/pages/page-home/page-home.html",
      controller: ($scope) => {
        $scope.test = "TEST";
      }
    });
});