
'use strict';
angular.module('copayApp.services')
  .factory('sjcl', function bitcoreZelFactory(bwcService) {
    var sjcl = bwcService.getSJCL();
    return sjcl;
  });
