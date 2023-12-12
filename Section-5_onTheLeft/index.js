const elToggle = document.querySelector(".sidebar-toggle");
const elClose = document.querySelector(".close-btn");

elToggle.addEventListener("click", function() {
    let elSidebar = document.querySelector(".sidebar");
    elSidebar.classList.add("show-sidebar");
});
elClose.addEventListener("click", function() {
    let elSidebar = document.querySelector(".sidebar");
    elSidebar.classList.remove("show-sidebar");
});
