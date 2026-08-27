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

    link.addEventListener(
        "click",
        function(event) {

            event.preventDefault();


            categoryLinks.forEach(
                function(otherLink) {

                    otherLink.classList.remove(
                        "active"
                    );

                }
            );


            link.classList.add("active");

        }
    );

});


/* =========================================
   LOGO
========================================= */

const logo =
    document.querySelector(".logo");


if (logo) {

    logo.addEventListener(
        "click",
        function(event) {

            event.preventDefault();


            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        }
    );

}
