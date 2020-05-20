$('.header__burger, .header__link').on('click', function(){
	$('.header__serif, .header__burger, .header__navigation').toggleClass('active');
	$('body').toggleClass('locked');
});

// carousel
$('.slick').slick({
	dots: true,
	spped: 300,
	slidesToShow: 1,
	arrows: false
});