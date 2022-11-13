// validation.js

addValidationListeners = () => {
    const email = document.querySelector('email-id');
    email.addEventListener('input', (e) => {
    })
}




window.addEventListener('DOMContentLoaded', (e) => {
    console.log('DOM loaded and parsed');

    addValidationListeners();
})