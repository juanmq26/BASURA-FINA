```js
(() => {

    const container = document.querySelector('.flying-object');

    if (!container) return;

    const bee = document.createElement('img');

    bee.src = '/images/ABEJA01_FLY.png';
    bee.className = 'flying-bee';
    bee.alt = '';

    bee.style.position = 'fixed';
    bee.style.width = '90px';
    bee.style.height = 'auto';
    bee.style.zIndex = '99999';
    bee.style.pointerEvents = 'none';

    container.appendChild(bee);


    function random(min, max) {
        return Math.random() * (max - min) + min;
    }


    function flyBee() {

        const width = window.innerWidth;
        const height = window.innerHeight;

        const beeSize = 100;


        /*
         * Elegimos el sentido:
         *
         * 0 = izquierda → derecha
         * 1 = derecha → izquierda
         */

        const direction = Math.random() < 0.5 ? 0 : 1;


        let startX;
        let startY;
        let endX;
        let endY;


        /*
         * IZQUIERDA → DERECHA
         *
         * La imagen se invierte horizontalmente.
         */

        if (direction === 0) {

            startX = -beeSize;
            startY = random(50, height - 50);

            endX = width + beeSize;
            endY = startY + random(-height * 0.35, height * 0.35);

            bee.style.transform = 'scaleX(-1)';

        }


        /*
         * DERECHA → IZQUIERDA
         *
         * La imagen mantiene su orientación original.
         */

        else {

            startX = width + beeSize;
            startY = random(50, height - 50);

            endX = -beeSize;
            endY = startY + random(-height * 0.35, height * 0.35);

            bee.style.transform = 'scaleX(1)';

        }


        /*
         * Duración del vuelo.
         */

        const duration = random(7, 12);


        /*
         * Colocamos la abeja fuera de pantalla.
         */

        bee.style.transition = 'none';

        bee.style.left = startX + 'px';
        bee.style.top = startY + 'px';


        /*
         * Forzamos al navegador a aplicar
         * la posición inicial.
         */

        bee.offsetHeight;


        /*
         * Iniciamos el vuelo.
         */

        bee.style.transition =
            `left ${duration}s linear, top ${duration}s linear`;

        bee.style.left = endX + 'px';
        bee.style.top = endY + 'px';


        /*
         * Cuando termina, esperamos un poco
         * y hacemos otro vuelo.
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
