window.addEventListener('load', function () {
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
    // PAYMENT MONEY PRICE CHANGE SECTION 
     // WHEN THE USER SELECTS AN HOTEL PRICE
      var moneyPrice = document.getElementById("money");
      var hotelType = document.getElementById("hotel-choose");
      hotelType.addEventListener("change", function () {
      moneyPrice.innerHTML = hotelType.value; 
      });
    // END PAYMENT MONEY PRICE CHANGE SECTION
    
});