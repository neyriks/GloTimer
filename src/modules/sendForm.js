const sendForm = () => {
    const errorMessage = 'Что-то пошло не так',
        successMessage = 'Спасибо! Мы скоро с вами свяжемся!',
        forms = document.querySelectorAll('form'),
        statusMessage = document.createElement('div');
    statusMessage.style.cssText = 'font-size: 2rem; color: #fff;';
    const preLoader = () => `<style>
.myContainer {
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
width: 100%;
overflow: hidden;
animation-delay: 1s;
background-color: rgba(0,0,0,0.33);
position: fixed;
left: 0;
top: 0;
z-index: 999;
}

.item-1 {
width: 20px;
height: 20px;
background: #f583a1;
border-radius: 50%;
background-color: #eed968;
margin: 7px;
display: flex;
justify-content: center;
align-items: center;
}
@keyframes scale {
0% {
transform: scale(1);
}
50%,
75% {
transform: scale(2.5);
}
78%, 100% {
opacity: 0;
}
}
.item-1:before {
content: '';
width: 20px;
height: 20px;
border-radius: 50%;
background-color: #eed968;
opacity: 0.7;
animation: scale 2s infinite cubic-bezier(0, 0, 0.49, 1.02);
animation-delay: 200ms;
transition: 0.5s all ease;
transform: scale(1);
}

.item-2 {
width: 20px;
height: 20px;
background: #f583a1;
border-radius: 50%;
background-color: #eece68;
margin: 7px;
display: flex;
justify-content: center;
align-items: center;
}
@keyframes scale {
0% {
transform: scale(1);
}
50%,
75% {
transform: scale(2.5);
}
78%, 100% {
opacity: 0;
}
}
.item-2:before {
content: '';
width: 20px;
height: 20px;
border-radius: 50%;
background-color: #eece68;
opacity: 0.7;
animation: scale 2s infinite cubic-bezier(0, 0, 0.49, 1.02);
animation-delay: 400ms;
transition: 0.5s all ease;
transform: scale(1);
}

.item-3 {
width: 20px;
height: 20px;
background: #f583a1;
border-radius: 50%;
background-color: #eec368;
margin: 7px;
display: flex;
justify-content: center;
align-items: center;
}
@keyframes scale {
0% {
transform: scale(1);
}
50%,
75% {
transform: scale(2.5);
}
78%, 100% {
opacity: 0;
}
}
.item-3:before {
content: '';
width: 20px;
height: 20px;
border-radius: 50%;
background-color: #eec368;
opacity: 0.7;
animation: scale 2s infinite cubic-bezier(0, 0, 0.49, 1.02);
animation-delay: 600ms;
transition: 0.5s all ease;
transform: scale(1);
}

.item-4 {
width: 20px;
height: 20px;
background: #f583a1;
border-radius: 50%;
background-color: #eead68;
margin: 7px;
display: flex;
justify-content: center;
align-items: center;
}
@keyframes scale {
0% {
transform: scale(1);
}
50%,
75% {
transform: scale(2.5);
}
78%, 100% {
opacity: 0;
}
}
.item-4:before {
content: '';
width: 20px;
height: 20px;
border-radius: 50%;
background-color: #eead68;
opacity: 0.7;
animation: scale 2s infinite cubic-bezier(0, 0, 0.49, 1.02);
animation-delay: 800ms;
transition: 0.5s all ease;
transform: scale(1);
}

.item-5 {
width: 20px;
height: 20px;
background: #f583a1;
border-radius: 50%;
background-color: #ee8c68;
margin: 7px;
display: flex;
justify-content: center;
align-items: center;
}
@keyframes scale {
0% {
transform: scale(1);
}
50%,
75% {
transform: scale(2.5);
}
78%, 100% {
opacity: 0;
}
}
.item-5:before {
content: '';
width: 20px;
height: 20px;
border-radius: 50%;
background-color: #ee8c68;
opacity: 0.7;
animation: scale 2s infinite cubic-bezier(0, 0, 0.49, 1.02);
animation-delay: 1000ms;
transition: 0.5s all ease;
transform: scale(1);
}
          </style>
          <div class="myContainer">
            <div class="item-1"></div>
            <div class="item-2"></div>
            <div class="item-3"></div>
            <div class="item-4"></div>
            <div class="item-5"></div>
            </div>
          `;
    const postData = body => fetch('./server.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });
    const removeStatusMessage = () => {
        if (!statusMessage) {
            return;
        } else {
            setTimeout(() => {
                statusMessage.remove();
            }, 5000);
        }
    };
    const success = () => {
        statusMessage.textContent = successMessage;
        removeStatusMessage();
    };
    const error = () => {
        statusMessage.textContent = errorMessage;
        statusMessage.style.cssText = `font-size: 2rem;
        color: red; `;
        removeStatusMessage();
    };
    forms.forEach(form => {
        form.addEventListener('submit', event => {
            event.preventDefault();
            form.appendChild(statusMessage);
            statusMessage.insertAdjacentHTML(`beforeend`, preLoader());
            const formData = new FormData(form);
            const body = {};
            formData.forEach((val, key) => {
                body[key] = val;
            });
            postData(body).then(success, response => {
                if (response.status !== 200) {
                    throw new Error('Status network not 200');
                }
            }).catch(error);
            form.reset();
        });
        // Валидация формы.
        form.addEventListener('input', event => {
            const target = event.target;
            if (target.name === 'user_phone') {
                target.value = target.value.replace(/[^\\+\d]/g, '');
            }
            if (target.name === 'user_name' || target.name === 'user_message') {
                target.value = target.value.replace(/[^а-я ]/gi, '');
            }
        });
    });
};

export default sendForm;