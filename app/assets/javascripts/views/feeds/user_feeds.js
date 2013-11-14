InstaTech.Views.UserFeedsView = Backbone.View.extend({
	template: JST['feeds/index'],

	initialize: function() {
		this.feeds = this.collection;
		this.subFeedViews = [];

		this.listenTo(this.collection, "add remove sync", this.render);
		this.listenTo(this.collection, "change", this.render);
	},

	render: function(event) {
		var that = this;

		var renderedContent = this.template({
			title: "My Feeds",
			feeds: this.collection,
		});

		this.leave();
		this.subFeedViews = [];
		var that = this;

		this.feeds.each(function(feed) {
			subView = new InstaTech.Views.FeedView({
				currentFeed: feed
			});
			that.subFeedViews.push(subView);
		});

		this.subFeedViews.forEach(function(feedView) {
			that.$el.append(feedView.render().$el);
		});

		InstaTech.Store.turnElementDraggable('.panel');
		InstaTech.Store.turnElementDroppable('.trash-can');

		return this;
	},

	leave: function() {
		this.subFeedViews.forEach(function(feedView) {
			feedView.remove();
		});
	}
})