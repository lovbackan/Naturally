
const hamburgerBtn = document.querySelector(".hamburger");
const dropDownMenu = document.querySelector(".dropDown");

hamburgerBtn.addEventListener("click", () => {
    dropDownMenu.classList.toggle("active")
});



const popUp = document.querySelector(".popUp");
const memberButtons = document.querySelectorAll("button");
const main = document.querySelector("main");
    

memberButtons.forEach((button) => {
    button.addEventListener("click", () => {
        popUp.classList.toggle("active");
    })
    
});



   
