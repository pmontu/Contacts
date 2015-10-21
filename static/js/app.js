var app = angular.module('contactsApp', [
  'ngRoute',
  'contactsController',
  'ui.bootstrap',
  'ui.grid',
  'contactsServices',
]);

app.config([
  '$routeProvider',
  '$resourceProvider',
  '$httpProvider',
  function($routeProvider, $resourceProvider, $httpProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/contact-list.html',
        controller: 'ContactsListCtrl',
        activetab: 'list'
      });
    $resourceProvider.defaults.stripTrailingSlashes = true;
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
  }]);