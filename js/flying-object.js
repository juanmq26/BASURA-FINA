(() => {

    const container = document.querySelector('.flying-object');

    if (!container) {
        alert('NO ENCUENTRO EL CONTENEDOR');
        return;
    }

    const bee = document.createElement('img');

    bee.src = '/images/ABEJA01_FLY.png';

    bee.style.position = 'fixed';
    bee.style.width = '90px';
    bee.style.height = 'auto';
    bee.style.left = '-100px';
    bee.style.top = '200px';
    bee.style.zIndex = '99999';

    container.appendChild(bee);

    setTimeout(() => {

        bee.style.transition = 'left 5s linear';

        bee.style.left = 'calc(100vw + 100px)';

    }, 100);

})();
