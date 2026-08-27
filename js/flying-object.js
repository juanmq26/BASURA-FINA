```js
(() => {

    const bee = document.createElement('img');

    bee.src = '/images/ABEJA01_FLY.png';
    bee.alt = '';

    bee.style.cssText = `
        position: fixed !important;
        left: -100px !important;
        top: 200px !important;
        width: 90px !important;
        height: auto !important;
        z-index: 999999 !important;
        pointer-events: none !important;
        display: block !important;
        opacity: 1 !important;
        visibility: visible !important;
    `;

    document.body.appendChild(bee);

    function fly() {

        bee.style.transition = 'none';
        bee.style.left = '-100px';
        bee.style.top = '200px';

        bee.offsetHeight;

        bee.style.transition = 'left 8s linear, top 8s linear';
        bee.style.left = 'calc(100vw + 100px)';
        bee.style.top = '400px';

        setTimeout(() => {
            fly();
        }, 8000);

    }

    fly();

})();
```
