```js
(() => {

    const bee = document.createElement('img');

    bee.src = '/images/ABEJA01_FLY.png';
    bee.alt = '';

    bee.style.cssText = `
        position: fixed !important;
        width: 90px !important;
        height: auto !important;
        z-index: 999999 !important;
        pointer-events: none !important;
        display: block !important;
        opacity: 1 !important;
    `;

    document.body.appendChild(bee);


    function random(min, max) {
        return Math.random() * (max - min) + min;
    }


    function flyBee() {

        const width = window.innerWidth;
        const height = window.innerHeight;

        const fromLeft = Math.random() < 0.5;

        const startY = random(10, 90);
        const endY = startY + random(-35, 35);

        const duration = random(7, 12);

        const startX = fromLeft ? -120 : width + 120;
        const endX = fromLeft ? width + 120 : -120;

        /*
         * Dirección de la abeja.
         *
         * Izquierda → derecha = espejo
         * Derecha → izquierda = original
         */

        const flip = fromLeft ? -1 : 1;


        /*
         * Posición inicial.
         */

        bee.style.transition = 'none';

        bee.style.left = startX + 'px';
        bee.style.top = startY + 'vh';

        bee.style.transform = `scaleX(${flip})`;


        /*
         * Forzamos el navegador a aplicar
         * la posición inicial.
         */

        bee.offsetHeight;


        /*
         * Movimiento diagonal.
         */

        bee.style.transition =
            `left ${duration}s linear, top ${duration}s linear`;

        bee.style.left = endX + 'px';
        bee.style.top = endY + 'vh';


        /*
         * Cuando termina el vuelo,
         * esperamos un poco y repetimos.
         */

        setTimeout(() => {

            bee.style.transition = 'none';

            setTimeout(() => {

                flyBee();

            }, random(1500, 4000));

        }, duration * 1000);

    }


    /*
     * Primer vuelo.
     */

    flyBee();

})();
```
