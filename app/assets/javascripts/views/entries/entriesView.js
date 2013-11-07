InstaTech.Views.EntriesView = Backbone.View.extend({
	template: JST['entries/index'],

	initialize: function(options) {
		this.options = options;
		// this.listenTo(this.collection, "add remove sync", this.render);
		// this.listenTo(this.collection, "change", this.render);
	},


	////// MAKE SURE THIS WORKS!

	events: {
		// "click .feed_text" : "showFeedEntries"
		//mouseover event
		//drag feed to delete feeds / trash area (maybe have a trash bin icon)
	},

	///////////////////////

	render: function() {
		var renderedContent = this.template({
			feed: this.options.currentFeed
		});

		this.$el.html(renderedContent);
		return this;
	}
});