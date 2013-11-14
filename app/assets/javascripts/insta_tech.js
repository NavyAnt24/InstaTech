window.InstaTech = {
  Models: {},
  Collections: {},
  Views: {},
	Store: {},
  Routers: {},
  initialize: function() {
    console.log('Hello from Backbone!');
  }
};

$(document).ready(function(){
  InstaTech.initialize();

	$('.save-feed').click(function() {
		$('.save-feed').button('loading');

		var formData = $('#add_news_source').serializeJSON();
		var feed = new InstaTech.Models.Feed(formData.feed);
		feed.save({}, {
			success: function() {
				$('#add-news-modal').modal('hide');
				$('.feed-url-input').val("");
				$('.save-feed').button('reset');
				InstaTech.userFeeds.add(feed);
			},
			error: function(model, xhr) {
				console.log('error saving feed');
				console.log(xhr);
			}
		});
	});

	//FIX THE TOOLTIP AT THE END
	// $('.feed-url-input').focusout(function() {
	// 	if ($(this).val().length === 0) {
	// 		$(this).tooltip('enable');
	// 		$(this).tooltip('show');
	// 	}
	// });
	//
	// $('.feed-url-input').focus(function() {
	// 	$(this).tooltip('disable');
	// });
});
