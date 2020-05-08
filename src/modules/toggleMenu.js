const toggleMenu = () => {
    const btnMenu = document.querySelector('.menu'),
        menu = document.querySelector('menu');

    const handlerMenu = () => {
        menu.classList.toggle('active-menu');
    };
    btnMenu.addEventListener('click', handlerMenu);
    menu.addEventListener('click', event => {
        const target = event.target;
        if (target.classList.contains('close-btn')) {
            handlerMenu();
        } else if (target.closest('li')) {
            handlerMenu();
        }
        return;
    });
    const anchors = document.querySelectorAll('li>a[href^="#"]'),
        btnScrollDown = document.querySelector('a[href="#service-block"]'),
        links = [...anchors, btnScrollDown];

    for (const anchor of links) {
        anchor.addEventListener('click', event => {
            event.preventDefault();
            const blockID = anchor.getAttribute('href');
            document.querySelector('' + blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    }
    // Убираем анимацию у телефонов
    let count = -100;
    const menuAnimation = () => {
        if (document.documentElement.clientWidth  < 768) { // Проверка на экран
            menu.style.transition = 'none';
            return;
        }
        const fps = requestAnimationFrame(menuAnimation); //вычисляем фпс
        count += 2;
        menu.style.transform = `translate ${count}%`;
        if (count === 0) {
            cancelAnimationFrame(fps);
        }
    };
    menuAnimation();
};

export default toggleMenu;