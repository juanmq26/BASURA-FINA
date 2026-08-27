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
    document.querySelector(".central-image");


const bagImage =
    document.querySelector(".central-image img");


const bags = [

    "./images/bag-01.png",

    "./images/bag-02.png",

    "./images/bag-03.png",

    "./images/bag-04.png"

];


let currentBag = 0;


/* =========================================
   PRE-CARGAR LAS IMÁGENES
========================================= */

bags.forEach(function(src) {

    const image =
        new Image();

    image.src = src;

});


/* =========================================
   CAMBIAR BOLSA AL HACER CLICK
========================================= */

if (centralImage && bagImage) {

    centralImage.style.cursor = "pointer";


    centralImage.addEventListener(
        "click",
        function() {

            currentBag++;

            if (
                currentBag >= bags.length
            ) {

                currentBag = 0;

            }


            bagImage.style.opacity = "0";


            setTimeout(function() {

                bagImage.src =
                    bags[currentBag];

                bagImage.style.opacity = "1";

            }, 120);

        }
    );

}
```
