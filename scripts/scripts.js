
const hamburgerBtn = document.querySelector(".hamburger");
const dropDownMenu = document.querySelector(".dropDown");

hamburgerBtn.addEventListener("click", () => {
    dropDownMenu.classList.toggle("active")
});



// const memberBtn = document.querySelector(".mobileButton");

// memberBtn.addEventListener("click", () => {
//     popUp.classList.toggle("active");
// });

const popUp = document.querySelector(".popUp");

console.log(popUp);

const memberButtons = document.querySelectorAll("button");
console.log(memberButtons);
    

memberButtons.forEach((button) => {
    button.addEventListener("click", () => {
        popUp.classList.toggle("active");
    })
    
});



   
