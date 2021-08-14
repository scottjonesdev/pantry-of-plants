//set up variables
var slideIndex = 1;
var timer = null;
showSlides(slideIndex);

//Arrow slide controls
function plusSlides(n) {
	//resets timer
	clearTimeout(timer);
	showSlides(slideIndex += n);
}

//Slide controls using dots on bottom of display
function currentSlide(n) {
	clearTimeout(timer);
	showSlides(slideIndex = n);
}

//function to progress image slides
function showSlides(n) {
	//setup variables
	var i;
	var slides = document.getElementsByClassName("slides");
	var dots = document.getElementsByClassName("dot");

	if (n == undefined) {
		n = ++slideIndex;
	}
	if (n > slides.length) {
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = slides.length
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
	  dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex-1].style.display = "block";

	//highlights dot of current image in slideshow
	dots[slideIndex-1].className += " active";

	//determines length each image is displayed for
	timer = setTimeout(showSlides, 6000);
} 