function positionFooter() {
	/*
	Always position the footer at the bottom of the page
	*/
	var footerHeight = $('#site-footer').height();

	$('#site-content').css({'padding-bottom': footerHeight+'px'});
}

$(document).ready(function(){
	var height = $('.site-nav').height();
	$('.site-nav').css({
		'line-height': height+'px',
	});

	$('.image-link').on('mouseover', function(){
		var img = $(this).find('img');
		var otherImg = img.attr('data-other');
		var srcImg = img.attr('src');

		img.attr('src', otherImg);
		img.attr('data-other', srcImg);
	});

	$('.image-link').on('mouseout', function(){
		var img = $(this).find('img');
		var otherImg = img.attr('data-other');
		var srcImg = img.attr('src');

		img.attr('src', otherImg);
		img.attr('data-other', srcImg);
	});

	positionFooter();

	$(window).resize(positionFooter);
});