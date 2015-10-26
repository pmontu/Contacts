services = angular.module("contactsServices", ['ngResource']);

services.factory('Contact', [
	'$http',
	function($http){
		return {
			get: function(id){
				return $http.get("/api/contact/get/" + id.toString())
			},
			query: function(data){
				data = data || null;
				return $http.post("/api/contact/", data);
			}
		}
}]);

services.factory('Phone', [
	'$http',
	function($http){
		return {
			query: function(data){
				return $http.post("/api/phone/", data);
			}
		}
}]);

services.factory('Address', [
	'$http',
	function($http){
		return {
			query: function(data){
				return $http.post("/api/address/", data);
			}
		}
}]);