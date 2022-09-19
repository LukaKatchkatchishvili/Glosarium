// burgerMenu
const hamburger = document.querySelector(".header__burger");
const navMenu = document.querySelector(".header__nav");

hamburger.addEventListener("click",() =>{
    hamburger.classList.toggle("burger-active");
    navMenu.classList.toggle("burger-active");
})
document.querySelectorAll(".header__nav__wrapper--link").forEach(n=> n.addEventListener("click",()=>{
    hamburger.classList.remove("burger-active");
    navMenu.classList.remove("burger-active");
}))