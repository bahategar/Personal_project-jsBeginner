const elModalBtn = document.querySelector("button.modal-btn");
const elCloseBtn = document.querySelector("button.close-btn");

elModalBtn.addEventListener("click", function() {
    let elModal = document.querySelector("div.modal-overlay");
    elModal.classList.add("open-modal");
}, false);

elCloseBtn.addEventListener("click", function() {
    let elModal = document.querySelector("div.modal-overlay");
    elModal.classList.remove("open-modal");
}, false);