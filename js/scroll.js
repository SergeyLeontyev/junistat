$(document).ready(function() {
	$('a.link-nav').bind('click', function(e) {
			e.preventDefault();

			var target = $(this).attr("href"); 
			$('html, body').stop().animate({
					scrollTop: $(target).offset().top
			}, 1500, function() {
					location.hash = target; 
			});

			return false;
	});
});