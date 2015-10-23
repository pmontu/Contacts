ctrls = angular.module("contactsController", []);

ctrls.controller("ContactsListCtrl", [
	"$scope",
	"Contact",
	'$route',
	'Address',
	'Phone',
	function($scope, Contact, $route, Address, Phone){
		
		$scope.$route = $route;

		Contact.query(function(data){

			$scope.contacts = data;
		});

		Phone.query(function(data){

			$scope.phones = data;
		});

		Address.query(function(data){

			$scope.addresses = data;
		});
	}]);

ctrls.controller("HomeCtrl", [
	"$scope",
	"Contact",
	'$route',
	'Address',
	'Phone',
	function($scope, Contact, $route, Address, Phone){
		
		$scope.$route = $route;

		Contact.query(function(data){

			$scope.contacts = data;
		});

		Phone.query(function(data){

			$scope.phones = data;
		});

		Address.query(function(data){

			$scope.addresses = data;
		});
	}]);