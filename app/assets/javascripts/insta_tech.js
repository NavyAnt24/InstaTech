window.InstaTech = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    console.log('Hello from Backbone!');
  }
};

$(document).ready(function(){
  InstaTech.initialize();

  $('.feeds-link').click(function() {
  	Backbone.history.navigate("users/" + InstaTech.Store.currentUserId + "/feeds");
  });

  // $('li.trash-can').hover(function() {
  // 	$('img.trash-can').css("webkit-filter", invert(100%));
  // });

	$('.save-feed').click(function() {
		var formData = $('.feed-url-input').serializeJSON();
		var feed = new InstaTech.Models.Feed(formData.feed);
		InstaTech.userFeeds.add(feed);
		feed.save({
			success: function() {
				alert('hello');
				$('#add-news-modal').modal('hide');
				$('.feed-url-input').val() = "";
				Backbone.history.navigate("users/" + InstaTech.Store.currentUserId + "/feeds");
			},
			error: function(model, xhr) {
				console.log(xhr);
			}
		});
	});

	$('.feed-url-input').focusout(function() {
		if ($(this).val().length === 0) {
			$(this).tooltip('enable');
			$(this).tooltip('show');
		}
	});

	$('.feed-url-input').focus(function() {
		$(this).tooltip('disable');
	});
});
