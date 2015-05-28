angular
	.module('SoundCloudApp', ['ngRoute'])
	.config(function($routeProvider, $httpProvider) {
		// $httpProvider.interceptors.push('httpRequestInterceptor');
			$routeProvider
				.when('/', {
					templateUrl: 'pages/tracks.html',
					controller: 'TracksController'
				});
	})