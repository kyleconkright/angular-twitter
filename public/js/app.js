var app = angular.module('app', []);

app.controller('TweetController', ['$scope', '$http', function($scope, $http){
	console.log("hello from tweet controller");

	$http.get('/tweets').success(function(response){
		$scope.tweets = response;
	})

}])
.directive('tweetCard', function() {
	return {
		restrict: 'E',
		templateUrl: '/templates/directives/tweet-card.html'
	};
});