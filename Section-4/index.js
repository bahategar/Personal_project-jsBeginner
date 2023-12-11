const elNavToggle = document.querySelector(".nav-toggle");
const elMenu = document.querySelector(".menu-line");

elNavToggle.addEventListener("click", function() {
    elMenu.classList.toggle("show-menu");
})