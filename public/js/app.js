var app = angular.module('app', []);

app.controller('TweetController', ['$scope', '$http', function($scope, $http){

	$http.get('/tweets').success(function(response){
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