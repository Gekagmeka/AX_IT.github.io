$('.header__burger, .header__link').on('click', function(){
	$('.header__serif, .header__burger, .header__navigation').toggleClass('active');
	$('body').toggleClass('locked');
});

// carousel
$('.slick').slick({
	dots: true,
	slidesToShow: 1,
	arrows: false,
	vertical: true,
	verticalSwiping:true,
		responsive:[
			{
				breakpoint: 768,
				settings: {
					dots: false,
					vertical: false,
					verticalSwiping: false
				}
			}
		]
});

var wow = new WOW(
	{
		boxClass: 'wow',
		animateClass: 'animated',
		offset: 0,
		mobile: false,
		live: true
	}
);
wow.init();