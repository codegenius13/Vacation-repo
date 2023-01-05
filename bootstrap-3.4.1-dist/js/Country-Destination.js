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
    var south = document.querySelector('.need-to');
    south.style.backgroundImage = 'url("file:///C:/Users/DAMILARE/Desktop/html%20,%20css%20javascript%20practice/jjj/Vacation/Vacation-repo/Vacation%20Images/cultural.jpg")';
    var southChild1 = document.querySelector('.south')
    southChild1.style.backgroundImage = 'url("file:///C:/Users/DAMILARE/Desktop/html%20,%20css%20javascript%20practice/jjj/Vacation/Vacation-repo/Vacation%20Images/cultural%203.jpg")';
    var southChild2 = document.querySelector('.south-two')
    southChild2.style.backgroundImage = 'url("file:///C:/Users/DAMILARE/Desktop/html%20,%20css%20javascript%20practice/jjj/Vacation/Vacation-repo/Vacation%20Images/cultural%203.jpg")';
    var southChild3 = document.querySelector('.south-three')
    southChild3.style.backgroundImage = 'url("file:///C:/Users/DAMILARE/Desktop/html%20,%20css%20javascript%20practice/jjj/Vacation/Vacation-repo/Vacation%20Images/cultural%203.jpg")';
    var southChild4 = document.querySelector('.south-four')
    southChild4.style.backgroundImage = 'url("file:///C:/Users/DAMILARE/Desktop/html%20,%20css%20javascript%20practice/jjj/Vacation/Vacation-repo/Vacation%20Images/cultural%203.jpg")';
    var southChild5 = document.querySelector('.south-five')
    southChild5.style.backgroundImage = 'url("file:///C:/Users/DAMILARE/Desktop/html%20,%20css%20javascript%20practice/jjj/Vacation/Vacation-repo/Vacation%20Images/cultural%203.jpg")';
    var southChild6 = document.querySelector('.south-six')
    southChild6.style.backgroundImage = 'url("file:///C:/Users/DAMILARE/Desktop/html%20,%20css%20javascript%20practice/jjj/Vacation/Vacation-repo/Vacation%20Images/cultural%203.jpg")';
    var southChild7 = document.querySelector('.south-seven')
    southChild7.style.backgroundImage = 'url("file:///C:/Users/DAMILARE/Desktop/html%20,%20css%20javascript%20practice/jjj/Vacation/Vacation-repo/Vacation%20Images/cultural%203.jpg")';
    var southChild8 = document.querySelector('.south-eight')
    southChild8.style.backgroundImage = 'url("file:///C:/Users/DAMILARE/Desktop/html%20,%20css%20javascript%20practice/jjj/Vacation/Vacation-repo/Vacation%20Images/cultural%203.jpg")';
})();