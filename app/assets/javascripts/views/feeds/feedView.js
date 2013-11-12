InstaTech.Views.FeedView = Backbone.View.extend({
	template: JST['feeds/show'],

	initialize: function(options) {
		this.options = options;
		this.listenTo(this.options.currentFeed, "add remove sync", this.render);
		this.listenTo(this.options.currentFeed, "change", this.render);
	},

	////// MAKE SURE THIS WORKS!

	events: {
		"click .like" : "likeFeed",
		"click .unlike" : "unlikeFeed"
		//mouseover event
		//drag feed to delete feeds / trash area (maybe have a trash bin icon)
	},

	///////////////////////

	likeFeed: function(event) {
		var feedId = $(event.currentTarget).attr('data-id');
		var feed = InstaTech.userFeeds.get(feedId);
		feed.removeLikeOrUnlike();
		
		if (feed.get('liked') !== true) {
			feed.like();
		}
	},

	unlikeFeed: function(event) {
		var feedId = $(event.currentTarget).attr('data-id');
		var feed = InstaTech.userFeeds.get(feedId);
		feed.removeLikeOrUnlike();

		if (feed.get('unliked') !== true) {
			feed.unlike();
		}
	},

	render: function() {
		var renderedContent = this.template({
			feed: this.options.currentFeed
		});

		this.$el.html(renderedContent);
		this.$el.addClass("panel panel-primary singleFeed");
		return this;
	}
});