InstaTech.Models.Entry = Backbone.Model.extend({
	urlRoot: '/feeds/:feed_id/entries',

	like: function() {
		var entry = this;

		$.ajax({
			type: "POST",
			url: "/entries/" + entry.id + "/like",
			data: { like_or_unlike: 1, likeable_type: "Entry", item_id: entry.id },

			success: function(data) {
				entry.set('liked', true);
			},
			error: function(model, xhr) {
				console.log(xhr);
			}
		});
	},

	removeLikeOrUnlike: function() {
		var entry = this;

		if (entry.get('liked') === true || entry.get('unliked') === true) {
			$.ajax({
				type: "DELETE",
				data: { likeable_type: "Entry", item_id: entry.id },
				url: "/entries/" + entry.id + "/like",

				success: function() {
					entry.set('liked', false);
					entry.set('unliked', false);
				}
			});
		}
	},

	unlike: function() {
		var entry = this;

		$.ajax({
			type: "POST",
			url: "/entries/" + entry.id + "/like",
			data: { like_or_unlike: -1, likeable_type: "Entry", item_id: entry.id },

			success: function() {
				entry.set('unliked', true);
			},
			error: function(model, xhr) {
				console.log(xhr);
			}
		});
	},

});