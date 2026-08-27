```js
(() => {

    const bee = document.createElement('img');

    bee.src = '/images/ABEJA01_FLY.png';
    bee.alt = '';

    bee.style.cssText = `
        position: fixed;
        width: 90px;
        height: auto;
        z-index: 999999;
        pointer-events: none;
        display: block;
    `;

    document.body.appendChild(bee);


    function random(min, max) {
        return Math.random() * (max - min) + min;
    }


    function flyBee() {

        const width = window.innerWidth;
        const height = window.innerHeight;

        const beeSize = 100;


        /*
         * Elegimos el sentido.
         *
         * 0 = izquierda → derecha
         * 1 = derecha → izquierda
         */

        const leftToRight = Math.random() < 0.5;


        let startX;
        let startY;
        let endX;
        let endY;


        if (leftToRight) {

            /*
             * IZQUIERDA → DERECHA
             */

            startX = -beeSize;
            startY = random(50, height - 50);

            endX = width + beeSize;
            endY = startY + random(-height * 0.35, height * 0.35);


            /*
             * Espejo horizontal.
             */

            bee.style.transform = 'scaleX(-1)';

        } else {

            /*
             * DERECHA → IZQUIERDA
             */

            startX = width + beeSize;
            startY = random(50, height - 50);

            endX = -beeSize;
            endY = startY + random(-height * 0.35, height * 0.35);


            /*
             * Orientación original.
             */

            bee.style.transform = 'scaleX(1)';

        }


        const duration = random(7, 12);


        /*
         * Posición inicial.
         */

        bee.style.transition = 'none';

        bee.style.left = startX + 'px';
        bee.style.top = startY + 'px';


        /*
         * Forzamos al navegador a registrar
         * la posición inicial.
         */

        bee.offsetHeight;


        /*
         * Vuelo.
         */

        bee.style.transition =
            `left ${duration}s linear, top ${duration}s linear`;

        bee.style.left = endX + 'px';
        bee.style.top = endY + 'px';


        /*
         * Cuando sale de pantalla,
         * esperamos antes del siguiente vuelo.
         */

        setTimeout(() => {

            bee.style.transition = 'none';

            setTimeout(() => {
                flyBee();
            }, random(1500, 4000));

        }, duration * 1000);

    }


    /*
     * Primer vuelo inmediato.
     */

    flyBee();

})();
```
