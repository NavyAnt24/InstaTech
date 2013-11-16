InstaTech.Store = {
	turnElementDraggable: function (className) {
		if ($(className)) {
			$(className).draggable({
				revert: true,
				start: function() {
					$(this).ClassyWiggle('start');
					$(this).css('z-index', 10000);
				},

				stop: function() {
					$(this).css('z-index', 'auto');
					$(this).ClassyWiggle('stop');
				}
			});
		}

	},

	turnElementDroppable: function(className) {
		if ($(className)) {
			$(className).droppable({
				accept: '.panel',
				tolerance: 'pointer',
				hoverClass: 'hover-trash-can',
				activeClass: 'active-trash-can',
				drop: function(event, ui) {
					ui.draggable.draggable("destroy");
					ui.draggable.toggle('explode');
					if (ui.draggable.hasClass("singleFeed")) {
						feedId = ui.draggable.find("span").attr('data-id');
						$.ajax({
							type: "DELETE",
							url: "/feeds/" + feedId,
							success: function() {
								// console.log('deleted feed!');
								InstaTech.userFeeds.remove(feedId);
							}
						});

					} else if (ui.draggable.hasClass("singleEntry")) {
						entryId = ui.draggable.find("span").attr('data-id');
						feedId = ui.draggable.find("span").attr('data-feed-id');
						$.ajax({
							type: "DELETE",
							url: "/feeds/" + feedId + "/entries/" + entryId,
							success: function() {
								// console.log("deleted entry!");
								InstaTech.userFeeds.get(feedId).entries().remove(entryId);
							}
						});
					}
				}
			});
		}
	}


}