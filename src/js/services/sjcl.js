
'use strict';
angular.module('zelApp.services')
  .factory('sjcl', function bitcoreZelFactory(bwcService) {
    var sjcl = bwcService.getSJCL();
    return sjcl;
  });
