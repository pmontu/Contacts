services = angular.module("contactsServices", ['ngResource']);

services.factory('Contact', [
	'$http',
	function($http){
		return {
			get: function(id){
				return $http.get("/api/contact/get/" + id.toString())
			},
			query: function(){
				return $http.get("/api/contact/");
			}
		}
}]);

services.factory('Phone', [
	'$http',
	function($http){
		return {
			query: function(data){
				return $http.post("/api/phone/", data);
			},
			master: function(){
				return $http.post("/api/phone/master/");
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