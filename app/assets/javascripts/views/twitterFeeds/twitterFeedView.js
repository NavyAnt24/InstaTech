InstaTech.Views.TwitterFeedView = Backbone.View.extend({
	template: JST['twitterFeeds/twitterFeed'],

	initialize: function(options) {
		this.options = options;
		this.tweets = undefined
		this.singleTweetViews = [];
		this.singleTweetViewsDup = [];

		this.createTweets();
		this.getTweets();

		// this.listenTo(this.options.currentFeed, "add remove sync", this.render);
		// this.listenTo(this.options.currentFeed, "change", this.render);
	},

	events: {
		// "click .like" : "likeFeed",
		// "click .unlike" : "unlikeFeed"
	},

	///////////////////////

	createTweets: function() {
		$.ajax({
			type: "POST",
			url: "/feeds/" + this.options.feed.id + "/tweets",
			data: { feed_url: this.options.feed.get('url') },

			success: function() {
				console.log("created tweets in database!");
			},
			error: function(model, xhr) {
				console.log(xhr);
			}
		});
	},

	getTweets: function() {
		var that = this;

		$.ajax({
			url: "/feeds/" + this.options.feed.id + "/tweets",
			// data: { feed_url: this.options.feed.get('url') },

			success: function(data) {
				that.tweets = data;
				that.tweets.reverse();
				console.log("I've got the tweets!");
				that.renderSingleTweetViews();
				// that.render();
			},
			error: function(model, xhr) {
				console.log(xhr);
			}
		});
	},

	renderSingleTweetViews: function() {
		var that = this;
		this.tweets.forEach(function(tweet) {
			singleTweetView = new InstaTech.Views.TweetDetailView({
				status: tweet
			});
			that.singleTweetViews.push(singleTweetView);
		});

		this.singleTweetViewsDup = this.singleTweetViews.slice(0);
		this.addTweets();
	},

	addTweets: function() {
		console.log('this!!');
		console.log(this);
		if (this.singleTweetViewsDup.length > 0) {
			this.prependOneTweet();
			setInterval(this.addTweets, 5000);
		} else if (this.singleTweetViewDup.length === 0) {
			clearInterval();
		}
	};,

	prependOneTweet: function() {
		singleTweetView = this.singleTweetViewsDup.shift();
		this.$el.find(".tweets").prepend(singleTweetView.render().$el);
	},

	render: function() {
		var that = this;

		var renderedContent = this.template({
			feed: this.options.feed
		});

		this.$el.html(renderedContent);
		return this;
	}
});