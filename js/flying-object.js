(() => {

    const bee = document.createElement('img');

    bee.src = '/images/ABEJA01_FLY.png';

    bee.style.cssText = `
        position: fixed !important;
        left: 50px !important;
        top: 50px !important;
        width: 150px !important;
        height: auto !important;
        z-index: 999999 !important;
        display: block !important;
        opacity: 1 !important;
        visibility: visible !important;
    `;

    document.body.appendChild(bee);

})();
