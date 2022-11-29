
const hamburgerBtn = document.querySelector(".hamburger");
const dropDownMenu = document.querySelector(".dropDown");

hamburgerBtn.addEventListener("click", () => {
    dropDownMenu.classList.toggle("active")
});



const popUpMobile = document.querySelector(".popUpMobile");
const popUpMobileThanks = document.querySelector(".popUpMobileThanks");
const mobileButtonPopup = document.querySelector(".mobileButtonPopup");
const mobileButtonPopupClose = document.querySelector(".mobileButtonPopupClose");
const memberButtons = document.querySelectorAll(".mobileButton");
const main = document.querySelector("main");
const body = document.querySelector("body");
    

memberButtons.forEach((memberButton) => {
    memberButton.addEventListener("click", () => {
        popUpMobile.classList.toggle("active");
        //  main.style.filter="blur(8px)";
        // body.style.filter="blur(8px)";
        // popUp.style.filter="blur(0px)";
        // main.style.opacity="0.5";
        // body.style.opacity="0.5";
        // popUp.style.opacity="1";
        disableScroll();
        
    
    })
    
});


mobileButtonPopup.addEventListener("click", () => {
        popUpMobileThanks.classList.toggle("active");
        popUpMobile.classList.toggle("active");
        disableScroll();
        
})

mobileButtonPopupClose.addEventListener("click", () => {
    popUpMobileThanks.classList.toggle("active");
    enableScroll();
})


function disableScroll() {
    // Get the current page scroll position
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
  
        // if any scroll is attempted, set this to the previous value
        window.onscroll = function() {
            window.scrollTo(scrollLeft, scrollTop);
        };
}
  
function enableScroll() {
    window.onscroll = function() {};
}


   
