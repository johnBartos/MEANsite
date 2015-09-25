(function () { 'use strict'; })();

angular.module('websiteApp')
.filter('to_trusted', ['$sce', function ($sce){
  return function (text) {
    return $sce.trustAsHtml(text);
  };
}]);
