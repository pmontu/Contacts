ctrls = angular.module("contactsController", []);

ctrls.controller("ContactsListCtrl", [
	"$scope",
	"Contact",
	'$route',
	'$location',
	function($scope, Contact, $route, $location){
		
		$scope.$route = $route;

		Contact.query().
		success(function(data){

			$scope.contacts = data;
		});

		$scope.editContact = function(contact_id){
			$location.path("/edit/"+contact_id)
		}
	}]);

ctrls.controller("HomeCtrl", [
	"$scope",
	'$route',
	function($scope, Contact, $route, Address, Phone){
		
		$scope.$route = $route;
	}]);

ctrls.controller("ContactEditCtrl", [
	"$scope",
	'$routeParams',
	'Address',
	'Contact',
	function($scope, $routeParams, Address, Contact){
		$scope.id = $routeParams.id;
		Contact.get({id:$scope.id}, function(data){
			$scope.contact = data;
			Address.query({contact:$scope.contact.url}).
			success(function(data){
				$scope.addresses = data;
			});
		});
	}]);