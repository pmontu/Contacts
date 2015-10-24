ctrls = angular.module("contactsController", []);

ctrls.controller("ContactsListCtrl", [
	"$scope",
	"Contact",
	'$route',
	'Address',
	'Phone',
	'$location',
	function($scope, Contact, $route, Address, Phone, $location){
		
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

		$scope.editContact = function(contact_id){
			$location.path("/edit/"+contact_id)
		}
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

ctrls.controller("ContactEditCtrl", [
	"$scope",
	'$routeParams',
	'Address',
	'Contact',
	function($scope, $routeParams, Address, Contact){
		$scope.id = $routeParams.id;
		Contact.get({id:$scope.id}, function(data){
			$scope.contact = data;
			Address.query({contact:$scope.contact.url}, function(data){
				$scope.addresses = data;
			})
		})
	}]);