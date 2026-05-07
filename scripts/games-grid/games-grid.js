let posters = document.querySelectorAll('.game-display img');

posters.forEach((poster) => {
    poster.addEventListener('mouseover', () => {
        posters.forEach((p) => {
            p.classList.add('gd-no-hover');
        });
    });

    poster.addEventListener('mouseleave', () => {
        posters.forEach((p) => {
            p.classList.remove('gd-no-hover');
        });
    });

    poster.addEventListener('click', (event) => {

        if(event.ctrlKey) {
            poster.classList.add('gd-fly-up');
            setTimeout(() => { 
                poster.classList.remove('gd-fly-up');
                window.open(poster.parentElement.dataset.url, '_blank');
                poster.classList.add('gd-zoom-in');
                setTimeout(() => poster.classList.remove('gd-zoom-in'), 700);
            }, 500);
            
        }
        else {
            activateMiniplayer(poster.parentNode.dataset.url);
            poster.classList.add('gd-fly-out');
            setTimeout(() => poster.classList.remove('gd-fly-out'), 500);
        }

    });
});