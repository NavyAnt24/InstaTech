InstaTech.Router = Backbone.Router.extend({
	routes: {
		"users/:id/feeds" : "userFeeds",
		"feeds/:feed_id/entries" : "showFeed"
	},

	userFeeds: function() {
		var userFeedsView = new InstaTech.Views.UserFeedsView({
			collection: InstaTech.userFeeds
		})
	},

	showFeed: function() {

	},

	//////////////////////////////////////////

	_swapView: function(newView) {
		if (this._prevView) {
			this._prevView.remove();
		}

		this._prevView = newView
		$('.backbone-container').html(newView.render().$el);
	}

});