InstaTech.Models.Feed = Backbone.Model.extend({
	urlRoot: '/feeds',

	entries: function() {
		if (!this._feedEntries) {
			this._feedEntries = new InstaTech.Collections.Entries([], { feed: this });
		}

		return this._feedEntries;
	},

	parse: function(response) {
		var that = this;
		entries = response.entries;
		entries.forEach(function(entry) {
			backbone_entry = new InstaTech.Models.Entry(entry);
			that.entries().push(backbone_entry);
		});

		delete response.entries;
		return response;
	}
});