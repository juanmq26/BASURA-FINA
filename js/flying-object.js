```js id="j4k8qm"
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

        const direction = Math.floor(random(0, 4));

        let startX;
        let startY;
        let endX;
        let endY;

        let flip = false;


        /*
         * IZQUIERDA → DERECHA
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
         * ORIENTACIÓN FIJA
         */

        const fixedRotation = 90;


        /*
         * Duración
         */

        const duration = random(7, 12);


        /*
         * ESCALA HORIZONTAL
         *
         * Solo se aplica el espejo en los vuelos
         * de izquierda → derecha.
         */

        const scaleX = flip ? -1 : 1;


        /*
         * POSICIÓN INICIAL
         */

        bee.style.transition = 'none';

        bee.style.transform =
            `translate(${startX}px, ${startY}px) rotate(${fixedRotation}deg) scaleX(${scaleX})`;


        bee.offsetHeight;


        /*
         * COMIENZA EL VUELO
         */

        bee.style.transition =
            `transform ${duration}s linear`;

        bee.style.transform =
            `translate(${endX}px, ${endY}px) rotate(${fixedRotation}deg) scaleX(${scaleX})`;


        /*
         * FINAL DEL VUELO
         */

        const onTransitionEnd = (event) => {

            if (event.propertyName !== 'transform') return;

            bee.removeEventListener(
                'transitionend',
                onTransitionEnd
            );

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
     * 1 ms para que aparezca inmediatamente,
     * manteniendo el mismo sistema que funciona.
     */

    setTimeout(() => {

        flyBee();

    }, 1);

})();
```
