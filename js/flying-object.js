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

        /*
         * Elegimos aleatoriamente uno de los cuatro
         * sentidos principales.
         *
         * A diferencia de Cargo, todos tienen componente
         * diagonal.
         */

        const direction = Math.floor(random(0, 4));

        let startX;
        let startY;
        let endX;
        let endY;


        // IZQUIERDA → DERECHA

        if (direction === 0) {

            startX = -beeSize;
            startY = random(0, height * 0.8);

            endX = width + beeSize;
            endY = startY + random(-height * 0.45, height * 0.45);

        }


        // DERECHA → IZQUIERDA

        else if (direction === 1) {

            startX = width + beeSize;
            startY = random(0, height * 0.8);

            endX = -beeSize;
            endY = startY + random(-height * 0.45, height * 0.45);

        }


        // ARRIBA → ABAJO

        else if (direction === 2) {

            startX = random(0, width * 0.8);
            startY = -beeSize;

            endX = startX + random(-width * 0.45, width * 0.45);
            endY = height + beeSize;

        }


        // ABAJO → ARRIBA

        else {

            startX = random(0, width * 0.8);
            startY = height + beeSize;

            endX = startX + random(-width * 0.45, width * 0.45);
            endY = -beeSize;

        }


        /*
         * Ángulo de la trayectoria.
         */

        const angle =
            Math.atan2(endY - startY, endX - startX)
            * 180 / Math.PI;


        /*
         * Duración.
         *
         * Cuanto menor sea el número,
         * más rápida será la abeja.
         */

        const duration = random(7, 12);


        /*
         * Rotación muy pequeña de la abeja.
         * No queremos que parezca que está girando.
         */

        const fixedRotation = 90;


        bee.style.transition = 'none';

        bee.style.transform =
            `translate(${startX}px, ${startY}px) rotate(${fixedRotation}deg)`;


        /*
         * Forzamos al navegador a aplicar
         * la posición inicial antes de empezar.
         */

        bee.offsetHeight;


        bee.style.transition =
            `transform ${duration}s linear`;

        bee.style.transform =
            `translate(${endX}px, ${endY}px) rotate(${fixedRotation}deg)`;


        /*
         * Cuando termina, esperamos un poco
         * y volvemos a lanzar otra.
         */

        setTimeout(() => {

            bee.style.transition = 'none';

            setTimeout(() => {
                flyBee();
            }, random(1500, 5000));

        }, duration * 1000);

    }


    /*
     * Primer vuelo.
     */

    setTimeout(() => {
        flyBee();
    }, 2000);


})();
