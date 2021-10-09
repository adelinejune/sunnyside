// UI Vars
const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");


// Hamburger Nav
navToggle.addEventListener("click", function(){
    console.log("click")
    links.classList.toggle("show-links")
})