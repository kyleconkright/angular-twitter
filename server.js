var express = require('express');
var Twit = require('twitter');

var app = express();

app.use(express.static(__dirname + '/public'));


var twitter = new Twit({
	consumer_key: 'L4mfb8SNgG52VHXeQ8b5RhNjq',
	consumer_secret: '4LKQKazMIS5Jv6g46lACJWJy6NlrIAZTOpYhd6ZuwWU4HtN5QW',
	access_token_key: '19151896-OTJIvRmwZc3MCe3qMaMf2140HPlkX1tqXG1yC7PFK',
	access_token_secret: 'bxKB932YNsqaA9Ji96WxG17BFWqhnHZL56K1EUjE0OHoD'
});

app.get('/tweets', function(req, res){
	var params = {screen_name: 'kyleconkright'};
	twitter.get('statuses/user_timeline', params, function(error, tweets, response){
	  if (!error) {
	    res.json(tweets);
	  }
	});
});

var port = process.env.PORT || 3000;
app.listen(port);
