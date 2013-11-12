InstaTech.Router = Backbone.Router.extend({

	routes: {
		"" : "userFeeds",
		"feeds/allStories" : "allEntries",
		"users/:id/feeds" : "userFeeds",
		"feeds/:feed_id/entries" : "showFeed"
	},

	allEntries: function() {
		allStories = new InstaTech.Collections.Entries([], {feed: 1})
		InstaTech.userFeeds.forEach(function (feed) {
			feed.entries().forEach(function(entry) {
				allStories.add(entry);
			});
		});

		var allEntriesView = new InstaTech.Views.EntriesView({
			collection: allStories
		});

		this._swapFeedsView(allEntriesView);
		// InstaTech.Store.turnElementDraggable('.panel-default');
		InstaTech.Store.turnElementDraggable('.panel');
		InstaTech.Store.turnElementDroppable('.trash-can');
	},

	userFeeds: function() {
		var userFeedsView = new InstaTech.Views.UserFeedsView({
			collection: InstaTech.userFeeds
		})

		this._swapFeedsView(userFeedsView);
		InstaTech.Store.turnElementDraggable('.panel-primary');
		InstaTech.Store.turnElementDroppable('.trash-can');

		InstaTech.Store.turnElementDroppable('.droponme');
	},

	showFeed: function(feed_id) {
		var entriesView = new InstaTech.Views.EntriesView({
			collection: InstaTech.userFeeds.get( parseInt(feed_id) ).entries()
		});

		this._swapFeedsView(entriesView);
		InstaTech.Store.turnElementDraggable('.panel-default');
		InstaTech.Store.turnElementDroppable('.trash-can');
	},

	//////////////////////////////////////////

	_swapFeedsView: function(newFeedsView) {
		if (this._prevFeedsView) {
			this._prevFeedsView.remove();
		}

		this._prevFeedsView = newFeedsView;
		$('#feed-view').html(newFeedsView.render().$el);
	}

});