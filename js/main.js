```js
/* =========================================
   BASURAFINA
   HOME
========================================= */


/* =========================================
   CATEGORÍAS
========================================= */

const categoryLinks =
    document.querySelectorAll(".categories a");


categoryLinks.forEach(function(link) {

    link.addEventListener("click", function(event) {

        event.preventDefault();

        categoryLinks.forEach(function(otherLink) {

            otherLink.classList.remove("active");

        });

        link.classList.add("active");

    });

});


/* =========================================
   LOGO
========================================= */

const logo =
    document.querySelector(".logo");


if (logo) {

    logo.addEventListener("click", function(event) {

        event.preventDefault();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


/* =========================================
   BOLSA CENTRAL
========================================= */

const centralImage =
    document.querySelector(".central-image img");


const bags = [
    "./images/BOLSA_1.png",
    "./images/BOLSA_2.png",
    "./images/BOLSA_3.png",
    "./images/BOLSA_4.png"
];


let currentBag = 0;


if (centralImage) {

    centralImage.style.cursor = "pointer";

    centralImage.addEventListener("click", function() {

        currentBag++;

        if (currentBag >= bags.length) {
            currentBag = 0;
        }

        centralImage.style.opacity = "0";

        setTimeout(function() {

            centralImage.src = bags[currentBag];

            centralImage.style.opacity = "1";

        }, 120);

    });

}
```
