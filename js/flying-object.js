```js
(() => {

    const container = document.querySelector('.flying-object');

    if (!container) return;


    /*
     * Contenedor que se encarga SOLO del movimiento.
     */

    const wrapper = document.createElement('div');

    wrapper.style.position = 'fixed';
    wrapper.style.left = '0';
    wrapper.style.top = '0';
    wrapper.style.width = '0';
    wrapper.style.height = '0';
    wrapper.style.zIndex = '999999';
    wrapper.style.pointerEvents = 'none';


    /*
     * Imagen de la abeja.
     */

    const bee = document.createElement('img');

    bee.src = 'images/ABEJA01_FLY.png';
    bee.className = 'flying-bee';
    bee.alt = '';

    bee.style.display = 'block';


    wrapper.appendChild(bee);
    container.appendChild(wrapper);


    function random(min, max) {
        return Math.random() * (max - min) + min;
    }


    function flyBee() {

        const width = window.innerWidth;
        const height = window.innerHeight;

        /*
         * Margen suficiente para que la abeja
         * quede completamente fuera de la pantalla.
         */

        const beeSize = 90;
        const margin = beeSize * 2;


        /*
         * Elegimos aleatoriamente uno de los cuatro
         * sentidos principales.
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
         * La imagen se invierte.
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
         * La imagen queda original.
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
         * ORIENTACIÓN FIJA.
         */

        const fixedRotation = 0;


        /*
         * Duración del vuelo.
         */

        const duration = random(7, 12);


        /*
         * El espejo se aplica SOLO a la imagen.
         * El movimiento del wrapper no se toca.
         */

        bee.style.transform = flip
            ? 'scaleX(-1)'
            : 'scaleX(1)';


        /*
         * POSICIÓN INICIAL
         */

        wrapper.style.transition = 'none';

        wrapper.style.transform =
            `translate(${startX}px, ${startY}px) rotate(${fixedRotation}deg)`;


        /*
         * Forzamos al navegador a aplicar
         * la posición inicial.
         */

        wrapper.offsetHeight;


        /*
         * COMIENZA EL VUELO.
         */

        wrapper.style.transition =
            `transform ${duration}s linear`;

        wrapper.style.transform =
            `translate(${endX}px, ${endY}px) rotate(${fixedRotation}deg)`;


        /*
         * FINAL DEL VUELO.
         */

        const onTransitionEnd = (event) => {

            if (event.propertyName !== 'transform') return;


            wrapper.removeEventListener(
                'transitionend',
                onTransitionEnd
            );


            wrapper.style.transition = 'none';


            setTimeout(() => {

                flyBee();

            }, random(1500, 5000));

        };


        wrapper.addEventListener(
            'transitionend',
            onTransitionEnd
        );

    }


    /*
     * Primer vuelo.
     *
     * Mantenemos 1 ms porque sabemos
     * que esta versión sí funciona.
     */

    setTimeout(() => {

        flyBee();

    }, 1);


})();
```
