InstaTech.Models.Feed = Backbone.Model.extend({
	urlRoot: '/feeds',

	like: function() {
		var feed = this;

		$.ajax({
			type: "POST",
			url: "/feeds/" + feed.id + "/like",
			data: { like_or_unlike: 1, likeable_type: "Feed" },
			
			success: function(data) {
				feed.set('liked', true);
			},
			error: function(model, xhr) {
				console.log(xhr);
			}
		});
	},

	removeLikeOrUnlike: function() {
		var feed = this;

		$.ajax({
			type: "DELETE",
			data: { likeable_type: "Feed" },
			url: "/feeds/" + feed.id + "/like",

			success: function() {
				feed.set('liked', false);
				feed.set('unliked', false);
			}
		});
	},

	unlike: function() {
		var feed = this;

		$.ajax({
			type: "POST",
			url: "/feeds/" + feed.id + "/like",
			data: { like_or_unlike: -1, likeable_type: "Feed" },
			
			success: function() {
				feed.set('unliked', true);
			},
			error: function(model, xhr) {
				console.log(xhr);
			}
		});
	},

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