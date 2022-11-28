
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
        
    
    })
    
});


mobileButtonPopup.addEventListener("click", () => {
        popUpMobileThanks.classList.toggle("active");
        popUpMobile.classList.toggle("active");
})

mobileButtonPopupClose.addEventListener("click", () => {
    popUpMobileThanks.classList.toggle("active");
})




//Horizontal scroll buttons
let leftBtn = document.querySelector(".arrowContainer")
let rightBtn = document.querySelector(".arrowContainerRight")
let grid = document.querySelector(".slider")

rightBtn.addEventListener("click", () => {
    grid.scrollLeft += 100;
})

leftBtn.addEventListener("click", () => {
    grid.scrollLeft -= 100;
})
