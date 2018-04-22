//scroll page: target each id and on click scroll down the page 
$(function() {
	$("nav a").click(function() {
		var element = $(this).attr("href");
// when href selected, highlight it in bold 
		$("href")

	    $('html, body').animate({
	        scrollTop: $(element).offset().top - 42
	    }, 1000);
	});
});

// Hamburger menu
	$('.fas.fa-bars.active').on('click', function() {
		$('nav').toggleClass('active');
	});
