'use strict';

angular.module('zelApp.services').factory('appConfigService', function($window) {
  return $window.appConfig;
});
