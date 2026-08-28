(() => {

    const container = document.querySelector('.flying-object');

    if (!container) return;


    const normalImage = 'images/ABEJA01_FLY.png';

    const mirrorImage =
        'https://github.com/juanmq26/BASURA-FINA/blob/main/images/ABEJA01_FLY_MIRROR.png?raw=true';


    /*
     * PRE-CARGAMOS LAS DOS IMÁGENES
     */

    const normal = new Image();
    normal.src = normalImage;

    const mirror = new Image();
    mirror.src = mirrorImage;


    /*
     * Creamos la abeja cuando las imágenes
     * ya están disponibles.
     */

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


        /*
         * IZQUIERDA → DERECHA
         *
         * IMAGEN ESPEJO
         */

        if (direction === 0) {

            startX = -margin;
            startY = random(0, height);

            endX = width + margin;
            endY = random(0, height);

            bee.src = mirrorImage;

        }


        /*
         * DERECHA → IZQUIERDA
         *
         * IMAGEN NORMAL
         */

        else if (direction === 1) {

            startX = width + margin;
            startY = random(0, height);

            endX = -margin;
            endY = random(0, height);

            bee.src = normalImage;

        }


        /*
         * ARRIBA → ABAJO
         */

        else if (direction === 2) {

            startX = random(0, width);
            startY = -margin;

            endX = random(0, width);
            endY = height + margin;

            bee.src = normalImage;

        }


        /*
         * ABAJO → ARRIBA
         */

        else {

            startX = random(0, width);
            startY = height + margin;

            endX = random(0, width);
            endY = -margin;

            bee.src = normalImage;

        }


        /*
         * ORIENTACIÓN FIJA
         */

        const fixedRotation = 0;


        /*
         * Duración
         */

        const duration = random(7, 12);


        /*
         * POSICIÓN INICIAL
         */

        bee.style.transition = 'none';

        bee.style.transform =
            `translate(${startX}px, ${startY}px) rotate(${fixedRotation}deg)`;


        bee.offsetHeight;


        /*
         * COMIENZA EL VUELO
         */

        bee.style.transition =
            `transform ${duration}s linear`;

        bee.style.transform =
            `translate(${endX}px, ${endY}px) rotate(${fixedRotation}deg)`;


        /*
         * FINAL
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
     * Esperamos a que las dos imágenes
     * estén cargadas antes del primer vuelo.
     */

    Promise.all([

        new Promise(resolve => {

            if (normal.complete) {
                resolve();
            } else {
                normal.onload = resolve;
            }

        }),

        new Promise(resolve => {

            if (mirror.complete) {
                resolve();
            } else {
                mirror.onload = resolve;
            }

        })

    ]).then(() => {

        flyBee();

    });


})();
