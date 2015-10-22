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