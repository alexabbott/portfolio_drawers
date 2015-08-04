if (window.innerWidth >= 800){
	$(document).ready(function(){
	  $('#experienceItems').slick({
		  infinite: true,
		  slidesToShow: 3,
		  slidesToScroll: 1,
		  autoplay: true,
		  autoplaySpeed: 3000
	  });
	});
}
else {
	$(document).ready(function(){
	  $('#experienceItems').slick({
		  infinite: true,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  autoplay: true,
		  autoplaySpeed: 3000,
		  swipeToSlide: true
	  });
	});
}
$('.previous').click(function(){
    $("#experienceItems").slick('slickPrev');
});
$('.pause').click(function(){
    $("#experienceItems").slick('slickPause');
});
$('.next').click(function(){
    $("#experienceItems").slick('slickNext');
});