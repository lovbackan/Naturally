
const hamburgerBtn = document.querySelector(".hamburger")
const dropDownMenu = document.querySelector(".dropDown")

hamburgerBtn.addEventListener("click", () => {
    dropDownMenu.classList.toggle("active")
})