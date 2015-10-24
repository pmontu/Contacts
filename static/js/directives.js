directives = angular.module("contactsDirectives", []);

directives.directive("addresses", function(){
	return {
		restrict:"E",
		scope:{
			addresses:"="
		},
		templateUrl:'partials/directive-addresses.html',
		link:function(element, $scope, attributes){

		}
	}
});

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
				Phone.query({contact:$scope.contact.url}, function(data){
					$scope.phones = data;
				});
			})
			
		}
	}
});