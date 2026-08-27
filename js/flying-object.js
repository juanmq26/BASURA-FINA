```js
(() => {

    const container = document.querySelector('.flying-object');

    if (!container) return;


    const bee = document.createElement('img');

    bee.src = 'images/ABEJA01_FLY.png';
    bee.className = 'flying-bee';
    bee.alt = '';

    container.appendChild(bee);


    function random(min, max) {
        return Math.random() * (max - min) + min;
    }


    function flyBee() {

        const width = window.innerWidth;
        const height = window.innerHeight;

        const beeSize = 90;
        const margin = beeSize * 2;


        /*
         * 0 = izquierda → derecha
         * 1 = derecha → izquierda
         * 2 = arriba → abajo
         * 3 = abajo → arriba
         */

        const direction = Math.floor(random(0, 4));


        let startX;
        let startY;
        let endX;
        let endY;

        let flip = 1;


        /*
         * IZQUIERDA → DERECHA
         *
         * Imagen normal.
         */

        if (direction === 0) {

            startX = -margin;
            startY = random(0, height);

            endX = width + margin;
            endY = random(0, height);

            flip = 1;

        }


        /*
         * DERECHA → IZQUIERDA
         *
         * Imagen espejada.
         */

        else if (direction === 1) {

            startX = width + margin;
            startY = random(0, height);

            endX = -margin;
            endY = random(0, height);

            flip = -1;

        }


        /*
         * ARRIBA → ABAJO
         *
         * Imagen normal.
         */

        else if (direction === 2) {

            startX = random(0, width);
            startY = -margin;

            endX = random(0, width);
            endY = height + margin;

            flip = 1;

        }


        /*
         * ABAJO → ARRIBA
         *
         * Imagen normal.
         */

        else {

            startX = random(0, width);
            startY = height + margin;

            endX = random(0, width);
            endY = -margin;

            flip = 1;

        }


        /*
         * Duración del vuelo.
         */

        const duration = random(7, 12);


        /*
         * Aplicamos el espejo por separado
         * del movimiento.
         *
         * 1  = normal
         * -1 = espejo horizontal
         */

        bee.style.scale = `${flip} 1`;


        /*
         * Colocamos la abeja fuera de pantalla.
         */

        bee.style.transition = 'none';

        bee.style.transform =
            `translate(${startX}px, ${startY}px)`;


        /*
         * Forzamos al navegador a registrar
         * la posición inicial.
         */

        bee.offsetHeight;


        /*
         * Comienza el vuelo.
         */

        bee.style.transition =
            `transform ${duration}s linear`;

        bee.style.transform =
            `translate(${endX}px, ${endY}px)`;


        /*
         * Esperamos un poco más que la duración
         * para asegurarnos de que ha terminado.
         */

        setTimeout(() => {

            bee.style.transition = 'none';

            /*
             * Ocultamos la abeja mientras esperamos
             * el siguiente vuelo.
             */

            bee.style.visibility = 'hidden';


            /*
             * Pausa aleatoria.
             */

            setTimeout(() => {

                bee.style.visibility = 'visible';

                flyBee();

            }, random(1500, 5000));

        }, (duration * 1000) + 100);

    }


    /*
     * La abeja está preparada para aparecer
     * directamente desde fuera de pantalla.
     */

    bee.style.visibility = 'visible';


    /*
     * Primer vuelo.
     */

    flyBee();


})();
```
