InstaTech.Views.EntriesView = Backbone.View.extend({
	template: JST['entries/index'],

	initialize: function(options) {
		this.options = options;
		entries = this.collection;
		subEntryViews = [];

		this.listenTo(this.collection, "add remove", this.render);
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
		var that = this;

		entries.each(function(entry) {
			subEntryView = new InstaTech.Views.EntryView({
				currentEntry: entry
			});
			subEntryViews.push(subEntryView);
		});

		twitterFeedView = new InstaTech.Views.TwitterFeedView({
			feed: this.options.feed
		});

		var renderedContent = this.template({
			entries: this.collection
		});

		this.$el.html(renderedContent);

		subEntryViews.forEach(function(entryView) {
			that.$el.find('.all-entries').append(entryView.render().$el);
		});

		that.$el.find('.twitter-feed').append(twitterFeedView.render().$el);

		InstaTech.Store.turnElementDraggable('.panel');
		InstaTech.Store.turnElementDroppable('.trash-can');

		return this;
	},

	leave: function() {
		subEntryViews.forEach(function(entryView) {
			entryView.remove();
		});
	}

});