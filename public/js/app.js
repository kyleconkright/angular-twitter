var app = angular.module('app', ['ngRoute']);

app.controller('TweetController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){

	$http.get('/tweets/' + $routeParams.user).success(function(response){
		console.log($routeParams);
		$scope.user = response[0].user.screen_name;
		$scope.bio = response[0].user.description;
		$scope.img_url = 'https://twitter.com/'+$scope.user+'/profile_image?size=original';
		$scope.tweets = response;
		for (var i = 0 ; i < $scope.tweets.length ; i ++) {
			if(Date.now() - Date.parse($scope.tweets[i].created_at) < 10000000) {
	            $scope.tweets[i].date = moment.duration(Date.now() -  Date.parse($scope.tweets[i].created_at)).humanize() + ' ago';
			} else {
				$scope.tweets[i].date = moment($scope.tweets[i].created_at).calendar();
			}
        }
	});
}])
.directive('tweetCard', function() {
	return {
		restrict: 'E',
		templateUrl: '/templates/directives/tweet-card.html'
	};
});

angular.module('app')
	.config(['$routeProvider', function($routeProvider){

		$routeProvider.when('/:user', {
			templateUrl: 'templates/pages/home/index.html'
		})
		.otherwise({redirectTo: '/kyleconkright'});
}]);