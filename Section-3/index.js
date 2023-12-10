var storageData = [
    {
        imgSrc: "img/photo-1.jpeg",
        name: "Bill Anderson",
        position: "The Boss",
        info: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic."
    },
    {
        imgSrc: "img/photo-2.jpeg",
        name: "Susan Smith",
        position: "Web Developer",
        info: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry."
    },
    {
        imgSrc: "img/photo-3.jpg",
        name: "Anna Johnson",
        position: "Web Designer",
        info: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal."
    },
    {
        imgSrc: "img/photo-4.jpg",
        name: "Peter Jones",
        position: "Intern",
        info: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag."
    }
]

// Create first card
var elImg, elName, elPosition, elInfo;
var elNext, elPrev, elSurprise;
var count = 0;
var data = storageData[0];

elImg = document.querySelector(".img-profile img");
elName = document.getElementById("name");
elPosition = document.getElementById("position");
elInfo = document.getElementById("info");


// load initial item
window.addEventListener('DOMContentLoaded', function () {
    elImg.src = data["imgSrc"];
    elName.innerText = data["name"];
    elPosition.innerText = data["position"];
    elInfo.innerHTML = data["info"];
  });

// Create call function
function getTarget(e) {
    if (!e) {
        e = window.event;
    }
    return e.target || e.srcElement;
}

function changeCard(e, method) {
    let data;
    target = getTarget(e);
    if (method.toLowerCase() == "next") {
        if (count == 3) {
            count = 0;
        } else {
            count ++;
        }
        data = storageData[count];
        elImg.src = data["imgSrc"];
        elName.innerText = data["name"];
        elPosition.innerText = data["position"];
        elInfo.innerHTML = data["info"];        
    } else if (method.toLowerCase() == "prev") {
        if (count == 0) {
            count = 3
        } else {
            count --;
        }
        data = storageData[count];
        elImg.src = data["imgSrc"];
        elName.innerText = data["name"];
        elPosition.innerText = data["position"];
        elInfo.innerHTML = data["info"];        
    }
}

function getRandom(e) {
    let data;
    target = getTarget(e);
    count = Math.floor(Math.random() * storageData.length);
    data = storageData[count];
    elImg.src = data["imgSrc"];
    elName.innerText = data["name"];
    elPosition.innerText = data["position"];
    elInfo.innerHTML = data["info"];        
}

// Event listener
elNext = document.getElementById("right");
elPrev = document.getElementById("left");
elSurprise = document.getElementById("surprise");
elNext.addEventListener("click", function(e) {
    changeCard(e, "next");
});
elPrev.addEventListener("click", function(e) {
    changeCard(e, "prev");
});
elSurprise.addEventListener("click", function(e) {
    getRandom(e);
});
