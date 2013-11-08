InstaTech.Views.FeedView = Backbone.View.extend({
	template: JST['feeds/show'],

	initialize: function(options) {
		this.options = options;
		// this.listenTo(this.collection, "add remove sync", this.render);
		// this.listenTo(this.collection, "change", this.render);
	},


	////// MAKE SURE THIS WORKS!

	events: {
		"click .feed_text" : "showFeedEntries"
		//mouseover event
		//drag feed to delete feeds / trash area (maybe have a trash bin icon)
	},

	///////////////////////

	render: function() {
		var renderedContent = this.template({
			feed: this.options.currentFeed
		});

		this.$el.html(renderedContent);
		this.$el.addClass("panel panel-primary singleFeed");
		return this;
	}
});