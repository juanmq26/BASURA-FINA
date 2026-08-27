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
    `;

    document.body.appendChild(bee);


    function random(min, max) {
        return Math.random() * (max - min) + min;
    }


    function flyBee() {

        const width = window.innerWidth;
        const height = window.innerHeight;

        const beeSize = 100;

        let startX;
        let startY;
        let endX;
        let endY;

        /*
         * Solo movimiento horizontal con componente diagonal.
         */

        const fromLeft = Math.random() < 0.5;


        if (fromLeft) {

            // IZQUIERDA → DERECHA

            startX = -beeSize;
            startY = random(50, height - 50);

            endX = width + beeSize;
            endY = startY + random(-height * 0.35, height * 0.35);

            // ESPEJO
            bee.style.transform = 'scaleX(-1)';

        } else {

            // DERECHA → IZQUIERDA

            startX = width + beeSize;
            startY = random(50, height - 50);

            endX = -beeSize;
            endY = startY + random(-height * 0.35, height * 0.35);

            // ORIGINAL
            bee.style.transform = 'scaleX(1)';

        }


        const duration = random(7, 12);


        /*
         * POSICIÓN INICIAL
         */

        bee.style.transition = 'none';

        bee.style.left = startX + 'px';
        bee.style.top = startY + 'px';


        /*
         * Obligamos al navegador a aplicar
         * la posición inicial.
         */

        bee.offsetHeight;


        /*
         * MOVIMIENTO
         */

        bee.style.transition =
            `left ${duration}s linear, top ${duration}s linear`;

        bee.style.left = endX + 'px';
        bee.style.top = endY + 'px';


        /*
         * Cuando termina, esperamos y repetimos.
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
