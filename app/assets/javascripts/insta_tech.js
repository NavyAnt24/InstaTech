window.InstaTech = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    alert('Hello from Backbone!');
		InstaTech.userFeeds = new InstaTech.Collection.UserFeeds()
		InstaTech.userFeeds.fetch({
			success: function() {
				new InstaTech.Router();
				Backbone.history.start();
			}
		});
  }
};

$(document).ready(function(){
  InstaTech.initialize();
});
