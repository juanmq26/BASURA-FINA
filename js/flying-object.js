(() => {

    const container = document.querySelector('.flying-object');

    if (!container) return;

    const bee = document.createElement('img');

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

        let image;


        /*
         * IZQUIERDA → DERECHA
         * IMAGEN ESPEJADA
         */

        if (direction === 0) {

            startX = -margin;
            startY = random(0, height);

            endX = width + margin;
            endY = random(0, height);

            image = 'https://github.com/juanmq26/BASURA-FINA/blob/main/images/ABEJA01_FLY_MIRROR.png?raw=true';

        }


        /*
         * DERECHA → IZQUIERDA
         * IMAGEN ORIGINAL
         */

        else if (direction === 1) {

            startX = width + margin;
            startY = random(0, height);

            endX = -margin;
            endY = random(0, height);

            image = 'images/ABEJA01_FLY.png';

        }


        /*
         * ARRIBA → ABAJO
         */

        else if (direction === 2) {

            startX = random(0, width);
            startY = -margin;

            endX = random(0, width);
            endY = height + margin;

            image = 'images/ABEJA01_FLY.png';

        }


        /*
         * ABAJO → ARRIBA
         */

        else {

            startX = random(0, width);
            startY = height + margin;

            endX = random(0, width);
            endY = -margin;

            image = 'images/ABEJA01_FLY.png';

        }


        /*
         * Ponemos la imagen correspondiente.
         */

        bee.src = image;


        /*
         * Esperamos a que la imagen esté cargada
         * antes de empezar el movimiento.
         */

        const startFlight = () => {

            const fixedRotation = 0;

            const duration = random(7, 12);


            /*
             * Posición inicial.
             */

            bee.style.transition = 'none';

            bee.style.transform =
                `translate(${startX}px, ${startY}px) rotate(${fixedRotation}deg)`;


            bee.offsetHeight;


            /*
             * Comienza el vuelo.
             */

            bee.style.transition =
                `transform ${duration}s linear`;

            bee.style.transform =
                `translate(${endX}px, ${endY}px) rotate(${fixedRotation}deg)`;


            /*
             * Final del vuelo.
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

        };


        /*
         * Si ya está cargada, empezamos directamente.
         * Si no, esperamos.
         */

        if (bee.complete) {

            startFlight();

        } else {

            bee.onload = startFlight;

        }

    }


    /*
     * Primer vuelo.
     */

    setTimeout(() => {

        flyBee();

    }, 1);


})();
