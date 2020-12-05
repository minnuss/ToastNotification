const btn = document.querySelector('.btn');
const containerNotification = document.querySelector('.container-notification');

btn.addEventListener('click', popUp);

function popUp() {

    let notification = document.createElement('div');
    notification.classList.add('notification');
    notification.textContent = 'You Raaaaaaang !'
    containerNotification.appendChild(notification);

    setTimeout(() => {
        notification.style.opacity = '0.8'
    }, 2000);

    setTimeout(() => {
        notification.style.opacity = '0.6'
    }, 2400);

    setTimeout(() => {
        notification.style.opacity = '0.3'
    }, 2800);

    setTimeout(() => {
        notification.remove();
    }, 3000);
}