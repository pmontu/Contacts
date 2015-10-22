ctrls = angular.module("contactsController", []);

ctrls.controller("ContactsListCtrl", [
	"$scope",
	"Contact",
	'$route',
	'Address',
	'Phone',
	function($scope, Contact, $route, Address, Phone){
		
		$scope.$route = $route;

		$scope.contactGridOptions = { 
	        data: 'contacts',
    		enableFiltering: true,
	        columnDefs: [
	        	{
	        		field:'name',
	        		displayName:'Name',
	        		filter:{
	        			placeholder:"search by name"
	        		}
	        	}
	        ]
	    };

		$scope.phoneGridOptions = { 
	        data: 'phones',
    		enableFiltering: true,
	        columnDefs: [
	        	{
	        		field:'number',
	        		displayName:'Number',
	        		filter:{
	        			placeholder:"search by number"
	        		}
	        	}
	        ]
	    };

		$scope.addressGridOptions = { 
	        data: 'addresses',
    		enableFiltering: true,
	        columnDefs: [
	        	{
	        		field:'number',
	        		displayName:'#',
	        		enableFiltering: false
	        	},
	        	{
	        		field:'street',
	        		displayName:'Street',
	        		enableFiltering: false
	        	},
	        	{
	        		field:'area',
	        		displayName:'Area',
	        		enableFiltering: false
	        	},
	        	{
	        		field:'city',
	        		displayName:'City'
	        	},
	        	{
	        		field:'pincode',
	        		displayName:'Pincode',
	        		enableFiltering: false
	        	}
	        ]
	    };

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