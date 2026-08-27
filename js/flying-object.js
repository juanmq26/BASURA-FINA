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

        const direction = Math.floor(random(0, 4));

        let startX;
        let startY;
        let endX;
        let endY;

        let flip = false;


        /*
         * IZQUIERDA → DERECHA
         *
         * La abeja mira hacia la derecha.
         * ESPEJO.
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
         * La abeja mira hacia la izquierda.
         * IMAGEN NORMAL.
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


        const scaleX = flip ? -1 : 1;

        const duration = random(7, 12);


        /*
         * POSICIÓN INICIAL
         */

        bee.style.transition = 'none';

        bee.style.transform =
            `translate(${startX}px, ${startY}px) scaleX(${scaleX})`;


        bee.offsetHeight;


        /*
         * VUELO
         */

        bee.style.transition =
            `transform ${duration}s linear`;

        bee.style.transform =
            `translate(${endX}px, ${endY}px) scaleX(${scaleX})`;


        /*
         * SIGUIENTE VUELO
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
     * PRIMER VUELO
     */

    setTimeout(() => {
        flyBee();
    }, 2000);

})();
```
