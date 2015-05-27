angular
	.module('SoundCloudApp')
	.controller('MainController', function($scope, $log, MainService) {
		function getUser() {
			MainService.getUsers();
		} 

		getUser()
	})