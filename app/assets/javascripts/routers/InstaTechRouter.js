InstaTech.Router = Backbone.Router.extend({

	routes: {
		"users/:id/feeds" : "userFeeds",
		"feeds/:feed_id/entries" : "showFeed"
	},

	userFeeds: function() {
		var userFeedsView = new InstaTech.Views.UserFeedsView({
			collection: InstaTech.userFeeds
		})

		this._swapFeedsView(userFeedsView);
		InstaTech.Store.turnElementDraggable('.panel-primary');
	},

	showFeed: function(feed_id) {
		var entriesView = new InstaTech.Views.EntriesView({
			collection: InstaTech.userFeeds.get( parseInt(feed_id) ).entries()
		});

		this._swapFeedsView(entriesView);
		InstaTech.Store.turnElementDraggable('.panel-default');
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