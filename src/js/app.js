'use strict';

var modules = [
  'angularMoment',
  'monospaced.qrcode',
  'gettext',
  'ionic',
  'ionic-toast',
  'angular-clipboard',
  'ngTouch',
  'ngLodash',
  'ngCsv',
  'angular-md5',
  'bwcModule',
  'bitauthModule',
  'zelApp.filters',
  'zelApp.services',
  'zelApp.controllers',
  'zelApp.directives',
  'zelApp.addons'
];

var zelApp = window.zelApp = angular.module('zelApp', modules);

angular.module('zelApp.filters', []);
angular.module('zelApp.services', []);
angular.module('zelApp.controllers', []);
angular.module('zelApp.directives', []);
angular.module('zelApp.addons', []);
