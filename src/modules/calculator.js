const calculator = () => {
    const input = document.querySelectorAll('input[type=number]');
    input.forEach(e => {
        e.addEventListener('input', e => {
            e.target.value = e.target.value.replace(/\D/gi, '');
        });
    });
};

export default calculator;
