directives = angular.module("contactsDirectives", []);

directives.directive("addresses", [
	"Contact",
	"Address",
	function(Contact, Address){
	return {
		restrict:"E",
		scope:{
			id:"="
		},
		templateUrl:'partials/directive-addresses.html',
		link:function($scope, element, attrs){
			Contact.get($scope.id).
			success(function(data){
				$scope.contact = data;	
				Address.query({contact:$scope.contact.id}).
				success(function(data){
					$scope.addresses = data;
				});
			});
		}
	}
}]);

directives.directive("card", [
	"Phone",
	"Contact",
	function(Phone, Contact){
	return {
		restrict:"E",
		scope:{
			id:"="
		},
		templateUrl:'partials/directive-card.html',
		controller:function($scope){

			Contact.get($scope.id).
			success(function(data){
				$scope.contact = data;
				Phone.query({contact:$scope.contact.id}).
					success(function(data){
						$scope.phones = data;
				});
			});

		}
	}
}]);

directives.directive("phones", [
	"Contact",
	"Phone",
	function(Contact, Phone){
	return {
		restrict:"E",
		scope:{
			id:"="
		},
		templateUrl:'partials/directive-phones.html',
		controller:function($scope){

			Contact.get($scope.id).
			success(function(data){
				$scope.contact = data;
				Phone.query({contact:$scope.contact.id}).
				success(function(data){
					$scope.phones = data;
				});
			});
		}
	}
}]);