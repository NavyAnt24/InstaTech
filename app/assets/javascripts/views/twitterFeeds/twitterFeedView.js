InstaTech.Views.TwitterFeedView = Backbone.View.extend({
	template: JST['twitterFeeds/twitterFeed'],

	initialize: function(options) {
		this.options = options;
		this.tweets = undefined
		this.singleTweetViews = [];

		this.createTweets();
		this.getTweets();

		// this.listenTo(this.options.currentFeed, "add remove sync", this.render);
		// this.listenTo(this.options.currentFeed, "change", this.render);
	},

	events: {

	},

	///////////////////////

	createTweets: function() {
		$.ajax({
			type: "POST",
			url: "/feeds/" + this.options.feed.id + "/tweets",
			data: { feed_url: this.options.feed.get('url') },

			success: function() {
				// console.log("created tweets in database!");
			},
			error: function(model, xhr) {
				console.log(xhr);
			}
		});
	},

	getTweets: function() {
		var that = this;

		$.ajax({
			url: "/feeds/" + that.options.feed.id + "/tweets",
			// data: { feed_url: this.options.feed.get('url') },

			success: function(data) {
				that.tweets = data;
				// that.tweets.reverse(); DON'T NEED TO DO THIS. THEY ARE IN ORDER
				that.renderSingleTweetViews();
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

		this.addTweets();
		this.intervalId = window.setInterval(this.addTweets.bind(this), 5000);
	},

	addTweets: function() {
		if (this.singleTweetViews.length > 0) {
			this.prependOneTweet();
		} else if (this.singleTweetViews.length === 0) {
			window.clearInterval(this.intervalId);
			this.leave(); // Clear out the old singleTweetViews
			this.createTweets();
			this.getTweets();
			this.$el.find(".tweets").html("");
		}
	},

	prependOneTweet: function() {
		singleTweetView = this.singleTweetViews.shift();
		this.$el.find(".tweets").prepend(singleTweetView.render().$el);
	},

	render: function() {
		var that = this;

		var renderedContent = this.template({
			feed: this.options.feed,
			searchTerm: this.options.feed.get('url').split('.')[1]
		});

		this.$el.html(renderedContent);
		return this;
	},

	leave: function() {
		this.singleTweetViews.forEach(function(singleTweetView) {
			singleTweetView.remove();
		});
		this.singleTweetViews = [];
		this.tweets = undefined;
	}
});