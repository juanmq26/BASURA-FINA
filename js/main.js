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
   BOLSA INTERACTIVA
========================================= */

const bagContainer =
    document.getElementById("bag-container");


const bagImage =
    document.getElementById("bag-image");


const bags = [

    "https://basura-fina.juanmq26.workers.dev/images/bag1.png",

    "https://basura-fina.juanmq26.workers.dev/images/bag2.png",

    "https://basura-fina.juanmq26.workers.dev/images/bag3.png",

    "https://basura-fina.juanmq26.workers.dev/images/bag4.png"

];


let currentBag = 0;


/* =========================================
   CLICK
========================================= */

if (bagContainer && bagImage) {

    bagContainer.addEventListener(
        "click",
        function() {

            currentBag++;

            if (currentBag >= bags.length) {

                currentBag = 0;

            }


            bagImage.src =
                bags[currentBag];

        }
    );

}
```
