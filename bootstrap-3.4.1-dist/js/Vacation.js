window.addEventListener('load', function () {
    // PRELOADER 
    var loader = document.getElementById("preloader");
      loader.style.display = "none"; 
    // END PRELOADER

 // STICKY HEADER
 // WHEN THE USER SCROLLS DOWN 20px SHOW THE HEADER THROUGHOUT PAGE
  $(function () {
  window.addEventListener("scroll", function () {
    var header = document.querySelector ("header");
    header.classList.toggle("sticky", window.scrollY > 170)
    });
 });
  // END STICKY HEADER
  
  // PALLAX SCROLLING EFFECT
  var text = document.getElementById("text-parallax");
  var cloud = document.getElementById("cloud");
  var bird1 = document.getElementById("bird1");
  var forest = document.getElementById("forest");
  var rock1 = document.getElementById("rock1");
  var rock2 = document.getElementById("rock2");
  var rock3 = document.getElementById("rock3");
  var button = document.getElementById("btn-parallax");
  var air = document.getElementById("ad-air");
   window.addEventListener('scroll', function () {
    var value = window.scrollY;
    text.style.top =  30 + value * -0.2 + '%' ;
    bird1.style.top = value * -1.0 + 'px';
    bird1.style.left = value * -5 + 'px'; 
    button.style.marginTop = value * 0.9 + 'px';
    forest.style.top = value * 0.3 + 'px';
    rock1.style.left = value * -0.4 + 'px';
    rock2.style.left = value * 0.4 + 'px';
    rock3.style.left = value * 0.4 + 'px';
    cloud.style.left = value * -1 + 'px';
    air.style.left = value * 4 + 'px';
  });
  // END PARALLAX SCROLLING EFFECT

 // PAGE SCROLLING DOWN TO TOP BUTTON

 // GET THE BUTTON
 var mybutton = document.getElementById("myBtn")

 // WHEN THE USER SROLLS DOWN 20px FROM THE TOP OF THE DOCUMENT SHOW THE BUTTON
 window.onscroll = function () {
  scrollFunction ()
 };
 function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
    mybutton.style.display = "block"
  }
  else {
    mybutton.style.display = "none"
  }
 }
 // WHEN THE USER CLICKS ON THE BUTTON, SCROLL TO THE TOP OF THE DOCUMENT
  function topFuntion() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  topFuntion ();

 // END PAGE SCROLLING DOWN TO TOP BUTTON
 
 // REVEAL THE WINDOW CONTENT WHEN THE USER SCROLLS DOWN
 window.addEventListener("scroll", reveal);
 function reveal() {
   var reveals = document.querySelectorAll(".reveal");
   for (var i=0; i < reveals.length; i++) {
     var windowHeight = window.innerHeight;
     var revealTop = reveals[i].getBoundingClientRect().top;
     var revealPoint = 150;
     if (revealTop < windowHeight - revealPoint) {
       reveals[i].classList.add("active");
     }
     else {
       reveals[i].classList.remove("active");
     }
    }
  }
  // END REVEAL THE WINDOW CONTENT WHEN THE USER SCROLLS DOWN

 // DESTINATION PAGE IMAGE SLIDER
 var slider = document.querySelector(".slider")
 var nextBtn = document.querySelector(".next-btn");
 var prevBtn = document.querySelector(".prev-btn");
 var slides = document.querySelectorAll(".slide");
 var slideIcons = document.querySelectorAll(".slide-icon");
 var numberOfSlides = slides.length;
 var slideNumber = 0;

 // IMAGE SLIDER NEXT BUTTON 
 nextBtn.addEventListener("click", () => {
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });
    slideIcons.forEach((slideIcons) => {
      slideIcons.classList.remove("active");
    });
    slideNumber ++;
    if (slideNumber > (numberOfSlides - 1)) {
      slideNumber = 0;  
    }
    slides[slideNumber].classList.add("active");
    slideIcons[slideNumber].classList.add("active");
 });
 // END IMAGE SLIDER NEXT BUTTON

 // IMAGE SLIDER PREVIOUS BUTTON 
 prevBtn.addEventListener("click", () => {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  slideIcons.forEach((slideIcons) => {
    slideIcons.classList.remove("active");
  });
  slideNumber --;
  if (slideNumber < 0) {
    slideNumber = numberOfSlides - 1;  
  }
  slides[slideNumber].classList.add("active");
  slideIcons[slideNumber].classList.add("active")
 });
 // END IMAGE SLIDER PREVIOUS BUTTON

 // IMAGE SLIDER AUTOMATIC PLAY
 var playSlider;
 var repeater = () => {
  playSlider = setInterval (function () {
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });
    slideIcons.forEach((slideIcons) => {
      slideIcons.classList.remove("active");
    });
    slideNumber ++;
    if (slideNumber > (numberOfSlides - 1)) {
      slideNumber = 0;  
    }
    slides[slideNumber].classList.add("active");
    slideIcons[slideNumber].classList.add("active")
  }, 5000);
 }
 repeater();
 // END IMAGE SLIDER AUTOMATIC PLAY

 // STOP IMAGE SLIDER AUTOMATIC PLAY WHEN MOUSEOVER
 slider.addEventListener("mouseover", () => {
   clearInterval(playSlider);
 });
 // END STOP IMAGE SLIDER AUTOMATIC PLAY WHEN MOUSEOVER

 // START IMAGE SLIDER AUTOMATIC PLAY WHEN MOUSEOUT
 slider.addEventListener("mouseout", () => {
   repeater();
 }, 5000);
 // END START IMAGE SLIDER AUTOMATIC PLAY WHEN MOUSEOUT

 // END DESTINATION PAGE IMAGE SLIDER
 
});