
const hamburgerBtn = document.querySelector(".hamburger");
const dropDownMenu = document.querySelector(".dropDown");

hamburgerBtn.addEventListener("click", () => {
    dropDownMenu.classList.toggle("active")

    console.log("hej")


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
        // popUpMobile.style.filter="blur(0px)";
        // main.style.opacity="0.5";
        // body.style.opacity="0.5";
        // popUp.style.opacity="0";
        disableScroll();
        
    
    })
    
});

if (popUpMobile.active)

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
// let sweSiteBtn = document.querySelectorAll(".sweBtn")
// let engSiteBtn = document.querySelectorAll(".engBtn")

// //get the current url
// engSite = window.location.href

// console.log(engSite);

// engSiteBtn.forEach(langBtn => {
//   if (engSite == "http://127.0.0.1:5500/english.html" || "http://127.0.0.1:5500/english.html#") {
//     langBtn.style.color = "#555"
//   }
// })

// sweSiteBtn.forEach(sweLangBtn => {
//   if (engSite !== "http://127.0.0.1:5500/english.html" ) {
//     sweLangBtn.style.color = "#555"
//   }
// })

//if the current url equals the english url change the color on the button
//  if (engSite == "http://127.0.0.1:5500/english.html") {
//     engSiteBtn.style.color = "#555"
// } else {
//   sweSiteBtn.style.color = "#555"
// }
