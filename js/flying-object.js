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

        /*
         * Margen suficiente para que la abeja
         * quede completamente fuera de la pantalla
         * al empezar y terminar.
         */
        const beeSize = 90;
        const margin = beeSize * 2;


        /*
         * Elegimos aleatoriamente uno de los cuatro
         * sentidos principales.
         *
         * Todos los vuelos tienen componente diagonal.
         */

        const direction = Math.floor(random(0, 4));

        let startX;
        let startY;
        let endX;
        let endY;


        /*
         * IZQUIERDA → DERECHA
         */

        if (direction === 0) {

            startX = -margin;
            startY = random(0, height);

            endX = width + margin;
            endY = random(0, height);

            bee.src = 'images/ABEJA01_FLY_MIRROR.png';

        }


        /*
         * DERECHA → IZQUIERDA
         */

        else if (direction === 1) {

            startX = width + margin;
            startY = random(0, height);

            endX = -margin;
            endY = random(0, height);

            bee.src = 'images/ABEJA01_FLY.png';

        }


        /*
         * ARRIBA → ABAJO
         */

        else if (direction === 2) {

            startX = random(0, width);
            startY = -margin;

            endX = random(0, width);
            endY = height + margin;

        }


        /*
         * ABAJO → ARRIBA
         */

        else {

            startX = random(0, width);
            startY = height + margin;

            endX = random(0, width);
            endY = -margin;

        }


        /*
         * ORIENTACIÓN FIJA
         *
         * La abeja NO gira siguiendo la trayectoria.
         *
         * 0   = orientación original
         * 90  = giro 90º
         * 180 = giro 180º
         * 270 = giro 270º
         */

        const fixedRotation = 0;


        /*
         * Duración del vuelo.
         *
         * Menor número = más rápida.
         */

        const duration = random(7, 12);


        /*
         * Colocamos la abeja en el punto inicial
         * sin transición.
         */

        bee.style.transition = 'none';

        bee.style.transform =
            `translate(${startX}px, ${startY}px) rotate(${fixedRotation}deg)`;


        /*
         * Forzamos al navegador a aplicar
         * la posición inicial antes de empezar.
         */

        bee.offsetHeight;


        /*
         * Comienza el vuelo.
         */

        bee.style.transition =
            `transform ${duration}s linear`;

        bee.style.transform =
            `translate(${endX}px, ${endY}px) rotate(${fixedRotation}deg)`;


        /*
         * Esperamos al final REAL de la transición.
         *
         * Esto es más fiable que usar un setTimeout
         * exactamente igual a la duración.
         */

        const onTransitionEnd = (event) => {

            if (event.propertyName !== 'transform') return;


            bee.removeEventListener(
                'transitionend',
                onTransitionEnd
            );


            /*
             * Pausa aleatoria antes del siguiente vuelo.
             */

            bee.style.transition = 'none';

            setTimeout(() => {

                flyBee();

            }, random(1500, 5000));

        };


        bee.addEventListener(
            'transitionend',
            onTransitionEnd
        );

    }


    /*
     * Primer vuelo.
     *
     * Esperamos 2 segundos antes de que
     * aparezca la primera abeja.
     */

    setTimeout(() => {

        flyBee();

    }, 1);


})();
```
