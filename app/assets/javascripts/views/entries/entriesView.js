InstaTech.Views.EntriesView = Backbone.View.extend({
	template: JST['entries/index'],

	initialize: function() {
		entries = this.collection;
		subEntryViews = [];
		entries.each(function(entry) {
			subEntryView = new InstaTech.Views.EntryView({
				currentEntry: entry
			});
			subEntryViews.push(subEntryView);
		});

		this.listenTo(this.collection, "add remove sync", this.render);
		this.listenTo(this.collection, "change", this.render);
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

		var renderedContent = this.template({
			entries: this.collection
		});

		subEntryViews.forEach(function(entryView) {
			that.$el.append(entryView.render().$el);
		});

		return this;
	}
});