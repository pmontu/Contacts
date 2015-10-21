services = angular.module("contactsServices", ['ngResource']);

services.factory('Contact', ['$resource',
  function($resource){
    return $resource("/contact/:id");
  }]);