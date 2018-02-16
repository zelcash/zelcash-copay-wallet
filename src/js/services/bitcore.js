'use strict';
angular.module('copayApp.services')
  .factory('bitcoreZel', function bitcoreZelFactory(bwcService) {
    var bitcoreZel = bwcService.getBitcoreZel();
    return bitcoreZel;
  });
