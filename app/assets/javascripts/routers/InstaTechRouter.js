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
	},

	showFeed: function() {

	},

	//////////////////////////////////////////

	_swapFeedsView: function(newFeedsView) {
		if (this._prevFeedsView) {
			this._prevFeedsView.remove();
		}

		this._prevFeedsView = newFeedsView
		$('#feed-view').html(newFeedsView.render().$el);
	}

});