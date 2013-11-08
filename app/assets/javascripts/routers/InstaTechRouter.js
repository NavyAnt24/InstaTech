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

		// $('.panel-primary').click(function() {
		// 	$(this).ClassyWiggle('start');
		// 	// $('.panel-primary').wiggle('start');
		// });

		$('.panel-primary').draggable({
			revert: true,
			start: function() {
				$(this).ClassyWiggle('start');
			},

			stop: function() {
				$(this).ClassyWiggle('stop');
			}
		});
	},

	showFeed: function(feed_id) {
		var entriesView = new InstaTech.Views.EntriesView({
			collection: InstaTech.userFeeds.get( parseInt(feed_id) ).entries()
		});

		this._swapFeedsView(entriesView);

		$('.panel-default').draggable({
			revert: true,
			start: function() {
				$(this).ClassyWiggle('start');
			},

			stop: function() {
				$(this).ClassyWiggle('stop');
			}
		});
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