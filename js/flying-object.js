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
         * esté completamente fuera de la pantalla
         * al comenzar y terminar.
         */

        const beeSize = 90;
        const margin = beeSize * 2;


        /*
         * Elegimos aleatoriamente uno de los cuatro
         * sentidos principales.
         *
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

        let flip = false;


        /*
         * IZQUIERDA → DERECHA
         *
         * La abeja entra desde la izquierda
         * y sale por la derecha.
         *
         * Imagen normal.
         */

        if (direction === 0) {

            startX = -margin;
            startY = random(0, height);

            endX = width + margin;
            endY = random(0, height);

            flip = false;

        }


        /*
         * DERECHA → IZQUIERDA
         *
         * La abeja entra desde la derecha
         * y sale por la izquierda.
         *
         * Imagen espejada.
         */

        else if (direction === 1) {

            startX = width + margin;
            startY = random(0, height);

            endX = -margin;
            endY = random(0, height);

            flip = true;

        }


        /*
         * ARRIBA → ABAJO
         */

        else if (direction === 2) {

            startX = random(0, width);
            startY = -margin;

            endX = random(0, width);
            endY = height + margin;

            flip = false;

        }


        /*
         * ABAJO → ARRIBA
         */

        else {

            startX = random(0, width);
            startY = height + margin;

            endX = random(0, width);
            endY = -margin;

            flip = false;

        }


        /*
         * Espejo horizontal.
         *
         * 1  = imagen normal
         * -1 = imagen espejada
         */

        const scaleX = flip ? -1 : 1;


        /*
         * Duración aleatoria del vuelo.
         */

        const duration = random(7, 12);


        /*
         * Colocamos la abeja FUERA de la pantalla
         * sin transición.
         */

        bee.style.transition = 'none';

        bee.style.transform =
            `translate(${startX}px, ${startY}px) scaleX(${scaleX})`;


        /*
         * La hacemos visible solo cuando ya está
         * preparada en su posición inicial.
         */

        bee.style.visibility = 'visible';


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
            `translate(${endX}px, ${endY}px) scaleX(${scaleX})`;


        /*
         * Esperamos al final REAL de la transición.
         */

        const onTransitionEnd = (event) => {

            if (event.propertyName !== 'transform') return;


            bee.removeEventListener(
                'transitionend',
                onTransitionEnd
            );


            /*
             * Volvemos a ocultarla mientras esperamos.
             * Así nunca queda congelada en pantalla.
             */

            bee.style.visibility = 'hidden';
            bee.style.transition = 'none';


            /*
             * Esperamos un tiempo aleatorio
             * antes del siguiente vuelo.
             */

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
     * Al cargar la página la abeja está oculta.
     *
     * El primer vuelo empieza inmediatamente,
     * colocando primero la abeja fuera de pantalla.
     */

    bee.style.visibility = 'hidden';

    requestAnimationFrame(() => {

        flyBee();

    });


})();
```
