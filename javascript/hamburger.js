const hamburgerMenu = document.querySelector(".hamburger-menu");
const menu = document.querySelector("nav ul");

hamburgerMenu.addEventListener("click", () => {
menu.classList.toggle("show");
hamburgerMenu.classList.toggle("open");
});