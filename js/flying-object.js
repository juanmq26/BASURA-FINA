```js
(() => {

    const container = document.querySelector('.flying-object');

    if (!container) return;

    const bee = document.createElement('img');

    bee.src = 'images/ABEJA01_FLY.png';
    bee.className = 'flying-bee';
    bee.alt = '';

    container.appendChild(bee);

    /*
     * La abeja empieza invisible.
     * Así no aparece congelada al cargar la página.
     */
    bee.style.visibility = 'hidden';


    function random(min, max) {
        return Math.random() * (max - min) + min;
    }


    function flyBee() {

        const width = window.innerWidth;
        const height = window.innerHeight;

        const beeSize = 90;
        const margin = beeSize * 2;


        /*
         * Elegimos uno de los cuatro sentidos.
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
         * La abeja va en espejo.
         */

        if (direction === 0) {

            startX = -margin;
            startY = random(0, height);

            endX = width + margin;
            endY = random(0, height);

            flip = true;

        }


        /*
         * DERECHA → IZQUIERDA
         *
         * La abeja mantiene el PNG original.
         */

        else if (direction === 1) {

            startX = width + margin;
            startY = random(0, height);

            endX = -margin;
            endY = random(0, height);

            flip = false;

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
         * Orientación fija.
         */

        const fixedRotation = 90;

        const scaleX = flip ? -1 : 1;


        /*
         * Duración del vuelo.
         */

        const duration = random(7, 12);


        /*
         * POSICIÓN INICIAL
         *
         * La abeja se coloca directamente
         * fuera de la pantalla.
         */

        bee.style.transition = 'none';

        bee.style.transform =
            `translate(${startX}px, ${startY}px) rotate(${fixedRotation}deg) scaleX(${scaleX})`;


        /*
         * Ahora ya podemos mostrarla,
         * porque está fuera de la pantalla.
         */

        bee.style.visibility = 'visible';


        /*
         * Forzamos al navegador a registrar
         * la posición inicial.
         */

        bee.offsetHeight;


        /*
         * COMIENZA EL VUELO
         */

        bee.style.transition =
            `transform ${duration}s linear`;

        bee.style.transform =
            `translate(${endX}px, ${endY}px) rotate(${fixedRotation}deg) scaleX(${scaleX})`;


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
             * Pausa antes del siguiente vuelo.
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
     * PRIMER VUELO
     *
     * Empieza inmediatamente.
     */

    flyBee();

})();
```
