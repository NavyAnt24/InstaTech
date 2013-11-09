InstaTech.Store = {
	turnElementDraggable: function (className) {
		$(className).draggable({
			revert: true,
			start: function() {
				$(this).ClassyWiggle('start');
				$(this).css('z-index', 10);
			},

			stop: function() {
				$(this).css('z-index', 'auto');
				$(this).ClassyWiggle('stop');
			}
		});

	}


}