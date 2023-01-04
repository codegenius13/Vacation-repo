window.addEventListener('load', function () {
    "use strict"
    // PRELOADER 
    var loader = document.getElementById("preloader");
      loader.style.display = "none"; 
    // END PRELOADER
    
    // STICKY HEADER

 // WHEN THE USER SCROLLS DOWN 20px SHOW THE HEADER THROUGHOUT PAGE
  window.addEventListener("scroll", function () {
    var header = document.querySelector ("header");
    header.classList.toggle("sticky", window.scrollY > 20)
    });
    window.addEventListener("scroll", function () {
    var footer = document.getElementById ("footer-section");
    footer.classList.toggle("sticky-two", window.scrollY > 20)
    });
    // END STICKY HEADER
  
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

    // COUNTRY IMAGE CAROUSEL SHOW
    var counter = 1;
    setInterval(function () {
        document.getElementById("radio" + counter).checked = true;
        counter++;
        if (counter > 5) {
            counter = 1;
        }
    },5000);
      // END COUNTRY IMAGE CAROUSEL SHOW
      // PROVINCE/ CITY VARIETY
      // SCROLL ONE
    var prevBtn = document.getElementById("prev-btn")
    prevBtn.addEventListener("click", function () {
      var left = document.querySelector(".scroll-images");
      left.scrollBy(-750, 0);
    });
    var nextBtn = document.getElementById("next-btn")
    nextBtn.addEventListener("click", function () {
      var right = document.querySelector(".scroll-images");
      right.scrollBy(750, 0);
    });
    // END SCROLL ONE
    // SCROLL TWO
    var backBtn = document.getElementById("back-btn")
    backBtn.addEventListener("click", function () {
      var left = document.querySelector(".scroll-images-two");
      left.scrollBy(-750, 0);
    });
    var frontBtn = document.getElementById("front-btn")
    frontBtn.addEventListener("click", function () {
      var right = document.querySelector(".scroll-images-two");
      right.scrollBy(750, 0);
    });
    // END SCROLL TWO
    // END SCROLL THREE
    var reverseBtn = document.getElementById("reverse-btn")
    reverseBtn.addEventListener("click", function () {
      var left = document.querySelector(".scroll-images-three");
      left.scrollBy(-750, 0);
    });
    var goBtn = document.getElementById("go-btn")
    goBtn.addEventListener("click", function () {
      var right = document.querySelector(".scroll-images-three");
      right.scrollBy(750, 0);
    });
    // END SCROLL THREE
    // END PROVINCE/ CITY VARIETY
})();
 // SOUTH AFRICA BACKGROUND
  var south = document.querySelector('.need-to')
  var southStyles = window.getComputedStyle(south);
  var southImage = southStyles.backgroundImage;
  var southUrl = southImage.slice(4, -1);
  southUrl.addEventListener('load');

  var southChild = document.querySelectorAll('.child');
  var southChildStyles = window.getComputedStyle(southChild);
  var southChildStyles = window.getComputedStyle(southChild);
  var southChildImage = southChildStyles.backgroundImage;
  var southChildUrl = southChildImage.slice(4, -1);
  southChildUrl.addEventListener('load');

  // END SOUTH AFRICA BACKGROUND