
const hamburgerBtn = document.querySelector(".hamburger");
const dropDownMenu = document.querySelector(".dropDown");

hamburgerBtn.addEventListener("click", () => {
    dropDownMenu.classList.toggle("active")
});



const popUp = document.querySelector(".popUp");
const memberButtons = document.querySelectorAll("button");
const main = document.querySelector("main");
const body = document.querySelector("body");
    

memberButtons.forEach((button) => {
    button.addEventListener("click", () => {
        popUp.classList.toggle("active");
        //  main.style.filter="blur(8px)";
        // body.style.filter="blur(8px)";
        // popUp.style.filter="blur(0px)";
        // main.style.opacity="0.5";
        // body.style.opacity="0.5";
        // popUp.style.opacity="1";
        
    
    })
    
});



   
