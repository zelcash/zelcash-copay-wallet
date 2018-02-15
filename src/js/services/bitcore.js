'use strict';
angular.module('zelApp.services')
  .factory('bitcoreZel', function bitcoreZelFactory(bwcService) {
    var bitcoreZel = bwcService.getBitcoreZel();
    return bitcoreZel;
  });
