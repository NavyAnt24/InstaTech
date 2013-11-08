window.InstaTech = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    console.log('Hello from Backbone!');
		// InstaTech.userFeeds = new InstaTech.Collections.Feeds()
		// InstaTech.userFeeds.fetch({
		// 	success: function() {
		// 		router = new InstaTech.Router();
		// 		Backbone.history.start();
		// 		router.navigate("users/" + InstaTech.Store.currentUserId + "/feeds")
		// 	}
		// });
  }
};

$(document).ready(function(){
  InstaTech.initialize();

	$('.save-feed').click(function() {
		var formData = $('.feed-url-input').serializeJSON();
		var feed = new InstaTech.Models.Feed(formData.feed);
		InstaTech.userFeeds.add(feed);
		feed.save(
			success: function() {
				Backbone.history.navigate("users/" + InstaTech.Store.currentUserId + "/feeds");
			}
		);
	});

	$('.feed-url-input').blur(function() {
		if ($(this).val().length === 0) {
			$(this).tooltip('enable');
		}
	});

	$('.feed-url-input').focus(function() {
		if ($(this).val().length !== 0) {
			$(this).tooltip('disable');
		}
	});
});
