(() => {

    const container = document.querySelector('.flying-object');

    if (!container) {
        alert('NO ENCUENTRO flying-object');
        return;
    }

    const bee = document.createElement('img');

    bee.src = 'images/ABEJA01_FLY.png';

    bee.style.position = 'fixed';
    bee.style.width = '90px';
    bee.style.left = '100px';
    bee.style.top = '100px';
    bee.style.zIndex = '99999';

    container.appendChild(bee);

})();
