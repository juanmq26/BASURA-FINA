```js
(() => {

    const container = document.querySelector('.flying-object');

    if (!container) return;

    const bee = document.createElement('img');

    bee.src = 'images/ABEJA01_FLY.png';
    bee.className = 'flying-bee';
    bee.alt = '';

    /*
     * Estos estilos aseguran que la abeja
     * no quede oculta por ningún CSS externo.
     */

    bee.style.position = 'fixed';
    bee.style.width = '90px';
    bee.style.height = 'auto';
    bee.style.zIndex = '999999';
    bee.style.pointerEvents = 'none';
    bee.style.display = 'block';
    bee.style.opacity = '1';
    bee.style.visibility = 'visible';

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
         */

        if (direction === 0) {

            startX = -margin;
            startY = random(0, height);

            endX = width + margin;
            endY = random(0, height);

        }


        /*
         * DERECHA → IZQUIERDA
         */

        else if (direction === 1) {

            startX = width + margin;
            startY = random(0, height);

            endX = -margin;
            endY = random(0, height);

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
         * Rotación fija.
         */

        const fixedRotation = 90;

        const duration = random(7, 12);


        /*
         * POSICIÓN INICIAL
         */

        bee.style.transition = 'none';

        bee.style.transform =
            `translate(${startX}px, ${startY}px) rotate(${fixedRotation}deg)`;


        /*
         * Forzamos al navegador a registrar
         * la posición inicial.
         */

        bee.offsetHeight;


        /*
         * VUELO
         */

        bee.style.transition =
            `transform ${duration}s linear`;

        bee.style.transform =
            `translate(${endX}px, ${endY}px) rotate(${fixedRotation}deg)`;


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
