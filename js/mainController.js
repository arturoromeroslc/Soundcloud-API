angular
	.module('SoundCloudApp')
	.controller('MainController', function($scope, $log, MainService) {
		$scope.getUser = function(userName) {
			MainService.getUsers(userName);
		}

		$scope.getUser('lifeplus')
	})