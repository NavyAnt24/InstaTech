InstaTech.Views.EntryView = Backbone.View.extend({
	template: JST['entries/singleEntry'],

	initialize: function(options) {
		this.options = options;
	},

	events: {
		"hover .entry_text" : "showEntryInfo"
	},

	render: function() {
		var renderedContent = this.template({
			entry: this.options.currentEntry,
		});

		this.$el.html(renderedContent);
		this.$el.addClass("panel panel-default singleEntry");
		return this;
	}
});