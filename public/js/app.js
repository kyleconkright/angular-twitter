var app = angular.module('app', []);

app.controller('TweetController', ['$scope', '$http', function($scope, $http){
	console.log("hello from tweet controller");

	$http.get('/tweets').success(function(response){
		console.log(response[0].user);
		$scope.user = response[0].user.screen_name;
		$scope.bio = response[0].user.description;
		$scope.img_url = 'https://twitter.com/'+$scope.user+'/profile_image?size=original';
		$scope.tweets = response;
	})

}])
.directive('tweetCard', function() {
	return {
		restrict: 'E',
		templateUrl: '/templates/directives/tweet-card.html'
	};
});