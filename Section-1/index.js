const colors = ["green", "red", "#FFA07A", "#FFDAB9", "rgb(127, 17, 224)",  "rgba(95, 158, 160, 1)"];
const elBtn = document.querySelector("button.btn");
const elContent = document.querySelector("span.color");

elBtn.addEventListener("click", function() {
    const randNumber = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randNumber];
    elContent.textContent = colors[randNumber];
    }
);
