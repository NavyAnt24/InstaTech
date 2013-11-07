InstaTech.Collections.Entries = Backbone.Collection.extend({
	model: InstaTech.Models.Entry,

	initialize: function(models, options) {
		this.feed = options.feed
	},

	url: function() {
		return "/feeds/" + this.feed.id + "/entries";
	}
});