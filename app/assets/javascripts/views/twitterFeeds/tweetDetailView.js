InstaTech.Views.TweetDetailView = Backbone.View.extend({
	template: JST['twitterFeeds/tweetDetail'],

	initialize: function(options) {
		this.options = options;
		// this.listenTo(this.options.currentFeed, "add remove sync", this.render);
		// this.listenTo(this.options.currentFeed, "change", this.render);
	},

	events: {
		// "click .like" : "likeFeed",
		// "click .unlike" : "unlikeFeed"
	},

	///////////////////////

	render: function() {
		var renderedContent = this.template({
			status: this.options.status
		});

		this.$el.html(renderedContent);
		return this;
	}
});