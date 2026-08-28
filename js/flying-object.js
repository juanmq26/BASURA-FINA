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
     * Precargamos la imagen espejada.
     * Así el navegador ya la tiene disponible
     * cuando sea necesaria.
     */

    const mirrorImage = new Image();
    mirrorImage.src = 'images/ABEJA01_FLY_MIRROR.png';


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

            bee.src = 'images/ABEJA01_FLY.png';

        }


        /*
         * ABAJO → ARRIBA
         */

        else {

            startX = random(0, width);
            startY = height + margin;

            endX = random(0, width);
            endY = -margin;

            bee.src = 'images/ABEJA01_FLY.png';

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
     */

    setTimeout(() => {

        flyBee();

    }, 1);


})();
```
