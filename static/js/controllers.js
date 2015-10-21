ctrls = angular.module("contactsController", []);

ctrls.controller("ContactsListCtrl", [
	"$scope",
	"Contact",
	function($scope, Contact){
		$scope.test = 1;
		Contact.query(function(data){
			$scope.contacts = data;
		});
	}]);