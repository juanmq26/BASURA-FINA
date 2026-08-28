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


        /*
         * IZQUIERDA → DERECHA
         * La abeja se espeja.
         */

        if (direction === 0) {

            startX = -margin;
            startY = random(0, height);

            endX = width + margin;
            endY = random(0, height);

            bee.style.transform = 'scaleX(-1)';

        }


        /*
         * DERECHA → IZQUIERDA
         * Imagen original.
         */

        else if (direction === 1) {

            startX = width + margin;
            startY = random(0, height);

            endX = -margin;
            endY = random(0, height);

            bee.style.transform = 'scaleX(1)';

        }


        /*
         * ARRIBA → ABAJO
         */

        else if (direction === 2) {

            startX = random(0, width);
            startY = -margin;

            endX = random(0, width);
            endY = height + margin;

            bee.style.transform = 'scaleX(1)';

        }


        /*
         * ABAJO → ARRIBA
         */

        else {

            startX = random(0, width);
            startY = height + margin;

            endX = random(0, width);
            endY = -margin;

            bee.style.transform = 'scaleX(1)';

        }


        /*
         * ORIENTACIÓN FIJA
         */

        const fixedRotation = 0;


        /*
         * Duración del vuelo.
         */

        const duration = random(7, 12);


        /*
         * IMPORTANTE:
         * guardamos el espejo en el IMG
         * y el movimiento en el contenedor.
         */

        container.style.transition = 'none';

        container.style.transform =
            `translate(${startX}px, ${startY}px) rotate(${fixedRotation}deg)`;


        container.offsetHeight;


        /*
         * Comienza el vuelo.
         */

        container.style.transition =
            `transform ${duration}s linear`;

        container.style.transform =
            `translate(${endX}px, ${endY}px) rotate(${fixedRotation}deg)`;


        /*
         * Cuando termina.
         */

        const onTransitionEnd = (event) => {

            if (event.propertyName !== 'transform') return;

            container.removeEventListener(
                'transitionend',
                onTransitionEnd
            );

            container.style.transition = 'none';

            setTimeout(() => {

                flyBee();

            }, random(1500, 5000));

        };


        container.addEventListener(
            'transitionend',
            onTransitionEnd
        );

    }


    /*
     * Primer vuelo.
     */

    setTimeout(() => {

        flyBee();

    }, 1);


})();
