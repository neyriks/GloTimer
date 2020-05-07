'use strict';
const sendForm = () => {
    const errorMessage = 'Что-то пошло не так',
        loadMessage = 'Загрузка...',
        successMessage = 'Спасибо! Мы скоро с вами свяжемся!';
    const forms = document.querySelectorAll('form');
    const statusMessage = document.createElement('div');
    statusMessage.style.cssText = 'font-size: 2rem; color: #fff;';
    forms.addEventListener('change', () => {
        fetch('./server.php')
            .then((response) => {
                if(response.status !== 200) {
                    throw new Error('status network not 200');
                }
            })
            .catch((errorMessage));
    });
};
sendForm();




// forms.forEach(form => {
//     const postData = body => new Promise((resolve, reject) => {
//         const request = new XMLHttpRequest();
//         request.addEventListener('readystatechange', () => {
//             if (request.readyState !== 4) {
//                 return;
//             }
//             if (request.status === 200) {
//                 resolve();
//                 form.reset();
//             } else {
//                 reject(request.status);
//             }
//         });
//         request.open('POST', './server.php');
//         request.setRequestHeader('Content-Type', 'application/json');
//         request.send(JSON.stringify(body));
//     });
//     const success = () => {
//         statusMessage.textContent = successMessage;
//     };
//     const error = () => {
//         statusMessage.textContent = errorMessage;
//         statusMessage.style.cssText = `font-size: 2rem;
//         color: red; `;
//     };
//     form.addEventListener('submit', event => {
//         event.preventDefault();
//         form.appendChild(statusMessage);
//         statusMessage.textContent = loadMessage;
//         const formData = new FormData(form);
//         const body = {};
//         // for (const val of formData.entries()) {
//         //     body[val[0]] = val[1];
//         // }
//         formData.forEach((val, key) => {
//             body[key] = val;
//         });
//         postData(body).then(success).catch(error);
//     });
// });