const togglePopUp = () => {
    const popup = document.querySelector('.popup'),
        popupBtn = document.querySelectorAll('.popup-btn'),
        popupClose = document.querySelector('.popup-close'),
        popupContent = document.querySelector('.popup-content');
    popupBtn.forEach(elem => {
        elem.addEventListener('click', () => {
            popup.style.display = 'block';
            popupContent.style.opacity = 0;
            function animate({ duration, draw, timing }) {
                const start = performance.now();
                requestAnimationFrame(function animate(time) {
                    let timeFraction = (time - start) / duration;
                    if (timeFraction > 1) {
                        timeFraction = 1;
                    }
                    const progress = timing(timeFraction);
                    draw(progress);
                    if (timeFraction < 1) {
                        requestAnimationFrame(animate);
                    }
                });
            }
            animate({
                duration: 1000,
                timing(timeFraction) {
                    return timeFraction;
                },
                draw(progress) {
                    popupContent.style.opacity = progress * 1;
                },
            });
        });
    });
    popupClose.addEventListener('click', () => {
        popup.style.display = 'none';
    });
    document.addEventListener('click', e => {
        if (e.target === popup) {
            popup.style.display = 'none';
        }
    });
};

export default togglePopUp;