InstaTech.Store = {
	turnElementDraggable: function (className) {
		$(className).draggable({
			revert: true,
			start: function() {
				$(this).ClassyWiggle('start');
				// $(this).css('position', 'absolute');
				// $(this).css('z-index', 100000);
			},

			stop: function() {
				$(this).css('z-index', 'auto');
				// $(this).css('position', 'relative');
				$(this).ClassyWiggle('stop');
			}
		});
	},

	turnElementDroppable: function(className) {
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
							console.log('deleted feed!');
							InstaTech.userFeeds.remove(feedId);
						}
					});

				} else if (ui.draggable.hasClass("singleEntry")) {
					entryId = ui.draggable.find("span").attr('data-id');

				}
			}
		});
	}


}