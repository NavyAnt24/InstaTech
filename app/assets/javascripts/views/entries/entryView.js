InstaTech.Views.EntryView = Backbone.View.extend({
	template: JST['entries/singleEntry'],

	initialize: function(options) {
		this.options = options;
	},

	events: {
		"hover .entry_text" : "showEntryInfo",
		"click .like" : "likeEntry",
		"click .unlike" : "unlikeEntry"
	},

	//////////////////////////////////

	likeEntry: function(event) {
		// var entryId = $(event.currentTarget).attr('data-id');
		// var feed = InstaTech.userFeeds.get(feedId);
		entry = this.options.currentEntry;
		entry.removeLikeOrUnlike();
		
		if (entry.get('liked') !== true) {
			entry.like();
		}
	},

	unlikeEntry: function(event) {
		// var entryId = $(event.currentTarget).attr('data-id');
		// var feed = InstaTech.userFeeds.get(feedId);
		entry = this.options.currentEntry;
		entry.removeLikeOrUnlike();

		if (entry.get('unliked') !== true) {
			entry.unlike();
		}
	},

	render: function() {
		var renderedContent = this.template({
			entry: this.options.currentEntry,
		});

		this.$el.html(renderedContent);
		this.$el.addClass("panel panel-default singleEntry");
		return this;
	}
});