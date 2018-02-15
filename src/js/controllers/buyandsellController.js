'use strict';

angular.module('zelApp.controllers').controller('buyandsellController', function($scope, $ionicHistory, buyAndSellService, lodash) {

  $scope.$on("$ionicView.beforeEnter", function(event, data) {
    $scope.services = buyAndSellService.get();

    if (lodash.isEmpty($scope.services))
      $ionicHistory.goBack();
  });
});
