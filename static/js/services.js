services = angular.module("contactsServices", ['ngResource']);

services.factory('Contact', ['$resource',
	function($resource){
		return $resource("/contact/:id");
}]);

services.factory('Address', ['$resource',
	function($resource){
		return $resource("/address/:id");
}]);

services.factory('Phone', ['$resource',
	function($resource){
		return $resource("/phone/:id");
}]);

services.factory('Contact2', [
	'$http',
	function($http){
		return {
			get: function(id){
				return $http.get("/contactsbook/contact/get/" + id.toString())
			}
		}
}]);

services.factory('Phone2', [
	'$http',
	function($http){
		return {
			query: function(data){
				return $http.post("/contactsbook/contact/", data)
			}
		}
}]);