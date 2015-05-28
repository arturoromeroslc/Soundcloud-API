angular
	.module('SoundCloudApp')
	.controller('MainController', function($scope, $log, $sce, $routeParams, MainService) {
		$scope.searchText = '';

		$scope.getUser = function(user) { 
			$scope.searchText = '';
			$routeParams.userId = user;
			console.log($routeParams.userId);
			MainService.getUsers(user)
				.then(function(user) {
					$scope.userData = user;
				});
		}

		$scope.play = function(track_url) {
			SC.oEmbed(track_url, { auto_play: true }, function(oEmbed) {
	      $scope.$apply($scope.player_html = $sce.trustAsHtml(oEmbed.html));
	    });
		}
		
	})