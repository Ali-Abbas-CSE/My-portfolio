var mobNav =document.querySelector(".mob-nav");
var ham = document.querySelector("#ham");
var count =0
ham.addEventListener("click", function(){
    if (count ===0) {
        mobNav.style.display = "flex";
        count =1;
    }else{
        mobNav.style.display = "none";
        count =0;
    }
})



// Typing effect code




      var typed = new Typed("#element", {
        strings: ["<i>a passionated Web developer.</i>", " a student."],
        // typeSpeed: 50,
        // loop: !0,
        typeSpeed: 80,
        backSpeed: 75,
        startDelay: 1000,
        backDelay: 2000,
        loop: !0,
        loopcount: false,
        showCursor: false,
      });
    
