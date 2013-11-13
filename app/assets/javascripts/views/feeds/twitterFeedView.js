InstaTech.Views.TwitterFeedView = Backbone.View.extend({
	template: JST['feeds/twitterFeed'],

	initialize: function(options) {
		this.options = options;
		// this.listenTo(this.options.currentFeed, "add remove sync", this.render);
		// this.listenTo(this.options.currentFeed, "change", this.render);
	},

	////// MAKE SURE THIS WORKS!

	events: {
		// "click .like" : "likeFeed",
		// "click .unlike" : "unlikeFeed"
	},

	///////////////////////



	render: function() {
		var renderedContent = this.template({
			twitterFeed: this.options.twitterFeed
		});

		this.$el.html(renderedContent);
		// this.$el.addClass("panel panel-primary singleFeed");
		return this;
	}
});