let posters = document.querySelectorAll('.game-display img');

posters.forEach((poster) => {
    poster.onmouseover = () => {
        posters.forEach((p) => {
            p.classList.add('gd-no-hover');
        });
    }

    poster.onmouseleave = () => {
        posters.forEach((p) => {
            p.classList.remove('gd-no-hover');
        });
    }

    poster.onclick = () => {
        poster.classList.add('gd-fly-out');
        setTimeout(() => poster.classList.remove('gd-fly-out'), 500);
    }
});