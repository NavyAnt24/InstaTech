InstaTech.Views.UserFeedsView = Backbone.View.extend({
	template: JST['feeds/index'],

	initialize: function() {
		feeds = this.collection;
		subFeedViews = [];
		feeds.each(function(feed) {
			subView = new InstaTech.Views.FeedView({
				currentFeed: feed
			});
			subFeedViews.push(subView);
		});

		// this.listenTo(this.collection, "add remove sync", this.render);
		// this.listenTo(this.collection, "change", this.render);
	},

	// a = {}
	// a["name of var"] =

	render: function() {
		var that = this;

		var renderedContent = this.template({
			title: "My Feeds",
			feeds: this.collection,
			// subViews: this.subFeedViews
			// how to inject subViews into this View
		});

		subFeedViews.forEach(function(feedView) {
			that.$el.append(feedView.render().$el);
		});
		return this;
	}
})