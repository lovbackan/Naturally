
const hamburgerBtn = document.querySelector(".hamburger");
const dropDownMenu = document.querySelector(".dropDown");

hamburgerBtn.addEventListener("click", () => {
    dropDownMenu.classList.toggle("active")
});



const popUpMobile = document.querySelector(".popUpMobile");
const popUpMobileThanks = document.querySelector(".popUpMobileThanks");
const mobileButtonPopup = document.querySelector(".mobileButtonPopup");
const mobileButtonPopupClose = document.querySelector(".mobileButtonPopupClose");
const emailInput = document.querySelector("input").value;
// const emailValue = document.querySelector(".input").value;
const memberButtons = document.querySelectorAll(".mobileButton");
const main = document.querySelector("main");
const body = document.querySelector("body");
const form =document.querySelector("form");
    

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

 form.addEventListener("submit", (e) => {
     e.preventDefault();
     popUpMobileThanks.classList.toggle("active");
    //  mobileButtonPopupClose.classList.toggle("active");
    

 });

 mobileButtonPopupClose.addEventListener("click", () => {
    popUpMobile.classList.toggle("active");
    popUpMobileThanks.classList.toggle("active");
    enableScroll()
 })

// if (emailInput) {
// mobileButtonPopup.addEventListener("click", () => {
//         popUpMobileThanks.classList.toggle("active");
//         popUpMobile.classList.toggle("active");
//         disableScroll();
        
// }) ;

// mobileButtonPopupClose.addEventListener("click", () => {
//     popUpMobileThanks.classList.toggle("active");
//     enableScroll();
// })



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


//Horizontal scroll buttons
let leftBtn = document.querySelector(".arrowContainer")
let rightBtn = document.querySelector(".arrowContainerRight")
let grid = document.querySelector(".slider")

//scroll right 200px
rightBtn.addEventListener("click", () => {
    grid.scrollLeft += 260;
})

//scroll left 200px
leftBtn.addEventListener("click", () => {
    grid.scrollLeft -= 260;
})
