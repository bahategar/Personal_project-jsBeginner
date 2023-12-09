function getTarget(e) {
    if(!e) {
        e = window.event;
    }
    return e.target || e.srcElement;
}

function updateCount(e, method) {
    var target = getTarget(e);
    var elCount = target.parentNode.parentNode.firstElementChild.lastElementChild;
    switch (method.toLowerCase()) {
        case "increase":
            elCount.innerHTML =  Number(elCount.innerHTML) + 1;
            break;
        case "decrease":
            elCount.innerHTML = Number(elCount.innerHTML) - 1;
            break;
        case "reset":
            elCount.innerHTML = 0; 
            break;
    }
}

var elDecrease, elReset, elIncrease;
elDecrease = document.getElementById("decrease");
elReset = document.getElementById("reset");
elIncrease = document.getElementById("increase");

// Add event listener
elDecrease.addEventListener("click", function(e) {
    updateCount(e, "decrease");
});
elReset.addEventListener("click", function(e) {
    updateCount(e, "reset");
});
elIncrease.addEventListener("click", function(e) {
    updateCount(e, "increase");
});