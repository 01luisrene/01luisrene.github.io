$(function() {
    $("body").vegas({
    	delay: 7000,
    	transition: [ 'fade', 'zoomOut', 'slideUp' ],
    	overlay: true,
	    slides: [
	        { src: "assets/images/slide/bg1.png" },
	        { src: "assets/images/slide/bg2.jpg" },
	        { src: "assets/images/slide/bg3.jpg" }
	    ]
	});
});