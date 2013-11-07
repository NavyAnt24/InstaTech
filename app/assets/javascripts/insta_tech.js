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
});
