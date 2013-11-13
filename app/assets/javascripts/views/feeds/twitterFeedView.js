InstaTech.Views.TwitterFeedView = Backbone.View.extend({
	template: JST['feeds/twitterFeed'],

	initialize: function(options) {
		this.options = options;
		this.tweets = undefined

		this.createTweets();
		this.getTweets();

		// this.listenTo(this.options.currentFeed, "add remove sync", this.render);
		// this.listenTo(this.options.currentFeed, "change", this.render);
	},

	////// MAKE SURE THIS WORKS!

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
		$.ajax({
			url: "/feeds/" + this.options.feed.id + "/tweets",
			// data: { feed_url: this.options.feed.get('url') },

			success: function(data) {
				this.tweets = data;
				console.log(data);
			},
			error: function(model, xhr) {
				console.log(xhr);
			}
		});
	},

	render: function() {
		var renderedContent = this.template({
			twitterFeed: this.options.twitterFeed
		});

		this.$el.html(renderedContent);
		// this.$el.addClass("panel panel-primary singleFeed");
		return this;
	}
});