$('#fixed-header').hide();

$(window).scroll(function() {
	var headerHeight = $('#site-header').height();

		if ($(this).scrollTop() > headerHeight) {
			$('#fixed-header').slideDown();
		} else {
			$('#fixed-header').slideUp("fast");
		}
});