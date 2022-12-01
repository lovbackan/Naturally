
const hamburgerBtn = document.querySelector(".hamburger");
const dropDownMenu = document.querySelector(".dropDown");

hamburgerBtn.addEventListener("click", () => {
    dropDownMenu.classList.toggle("active")


if (dropDownMenu.classList.contains('hidden')) {
    dropDownMenu.classList.remove('hidden');
    setTimeout(function () {
      dropDownMenu.classList.remove('visiblyHidden');
    }, 20);
  } else {
    dropDownMenu.classList.add('visiblyHidden');    
    dropDownMenu.addEventListener('transitionend', function(e) {
      dropDownMenu.classList.add('hidden');
    }, {
      capture: false,
      once: true,
      passive: false
    });
  }
  
}, false);



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
const closeIcon = document.querySelector("#firstIcon");
const secondIcon = document.querySelector("#secondIcon");
// const englishButton = document.querySelector("#english");
// const swedishButton = document.querySelector("#swedish");
// console.log(englishButton);
    

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
    
 });

 mobileButtonPopupClose.addEventListener("click", () => {
    popUpMobile.classList.toggle("active");
     popUpMobileThanks.classList.toggle("active");
    enableScroll()
 })

 firstIcon.addEventListener("click", () =>{
    form.classList.toggle("active")
    enableScroll()
 })

 secondIcon.addEventListener("click", () => {
    popUpMobileThanks.classList.toggle("active");
    form.classList.toggle("active")
    enableScroll()
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


//Horizontal scroll buttons
let leftBtn = document.querySelector(".arrowContainer")
let rightBtn = document.querySelector(".arrowContainerRight")
let grid = document.querySelector(".slider")

//scroll right 260px
rightBtn.addEventListener("click", () => {
    grid.scrollLeft += 260;
})

//scroll left 260px
leftBtn.addEventListener("click", () => {
    grid.scrollLeft -= 260;
})

//Change color on langSettings buttons depending on wedish/english site
let sweSiteBtn = document.querySelector(".sweBtn")
let engSiteBtn = document.querySelector(".engBtn")

//get the current url
engSite = window.location.href

//if the current url equals the english url change the color on the button
if (engSite == "https://naturallly.netlify.app/english.html" || engSite == "https://naturallly.netlify.app/english.html#") {
    engSiteBtn.style.color = "#555"
} else {
  sweSiteBtn.style.color = "#555"
}
