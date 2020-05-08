const images = () => {
    const img = document.querySelectorAll('.command__photo');
    let oldSrc;
    img.forEach(img => {
        img.addEventListener('mouseenter', e => {
            oldSrc = e.target.src;
            event.target.src = event.target.dataset.img;
        });
        img.addEventListener('mouseout', e => {
            const oldImg = e.target;
            oldImg.src = oldSrc;
            // event.target.img = event.target.oldImg;
        });
    });
};

export default images;