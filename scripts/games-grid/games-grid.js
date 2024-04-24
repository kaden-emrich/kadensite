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

    poster.addEventListener('click', () => {
        poster.classList.add('gd-fly-out');
        setTimeout(() => poster.classList.remove('gd-fly-out'), 500);
    });
});