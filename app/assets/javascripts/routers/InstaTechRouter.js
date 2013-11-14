InstaTech.Router = Backbone.Router.extend({

	routes: {
		"" : "userFeeds",
		"users/:id/feeds" : "userFeeds",
		"feeds/:feed_id/entries" : "showFeed",
		"feeds/allStories" : "allEntries"
	},

  allEntries: function() {
    allStories = new InstaTech.Collections.Entries([], {feed: 1})
    InstaTech.userFeeds.forEach(function (feed) {
      feed.entries().forEach(function(entry) {
              allStories.add(entry);
      });
    });

    var allEntriesView = new InstaTech.Views.EntriesView({
      collection: allStories,
			feed: InstaTech.userFeeds.first()
    });

    this._swapFeedsView(allEntriesView);
  },

	userFeeds: function() {
		var userFeedsView = new InstaTech.Views.UserFeedsView({
			collection: InstaTech.userFeeds
		})

		this._swapFeedsView(userFeedsView);
	},

	showFeed: function(feed_id) {
		var entriesView = new InstaTech.Views.EntriesView({
			collection: InstaTech.userFeeds.get( parseInt(feed_id) ).entries(),
			feed: InstaTech.userFeeds.get( parseInt(feed_id) )
		});

		this._swapFeedsView(entriesView);
	},

	//////////////////////////////////////////

	_swapFeedsView: function(newFeedsView) {
		if (this._prevFeedsView) {
			this._prevFeedsView.leave();
			this._prevFeedsView.remove();
		}

		this._prevFeedsView = newFeedsView;
		$('#feed-view').html(newFeedsView.render().$el);

		InstaTech.Store.turnElementDraggable('.panel');
		InstaTech.Store.turnElementDroppable('.trash-can');
	}

});