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
			Contact.get({id:$scope.id}, function(data){
				$scope.contact = data;
			});
			Address.query(function(data){
				$scope.addresses = data;
			});
		}
	}
}]);

directives.directive("card", function(Phone, Contact){
	return {
		restrict:"E",
		scope:{
			id:"="
		},
		templateUrl:'partials/directive-card.html',
		controller:function($scope){
			Contact.get({id:$scope.id}, function(data){
				$scope.contact = data;
			});
			Phone.query(function(data){
				$scope.phones = data;
			});
			
		}
	}
});

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

			$scope.masterPhoneTypes = {WK:'Work',HO:'Home',CE:'Cell'};
			Contact.get({id:$scope.id}, function(data){
				$scope.contact = data;
			});
			Phone.query(function(data){
				$scope.phones = data;
			});
		}
	}
}]);