// Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості. Для доступу до елементів форми використовуй властивість elements.
// Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.

const formEl = document.querySelector('.login-form');
const inputEmail = document.querySelector('input[name="email"]');
const inputPassword = document.querySelector('input[name="password"]');
// console.log(inputEmail);
// console.log(inputPassword);
formEl.addEventListener('submit', (event) => {
    event.preventDefault();
    if (inputEmail.value.length === 0 || inputPassword.value.length === 0) {
        window.alert("Всі поля повинні бути заповнені");
    }
    const {
        elements: { email, password }
    } = event.currentTarget;
    // console.log(email.value, password.value);
    // console.log(event.currentTarget.elements);
    const formData = new FormData(event.currentTarget);
    formData.forEach((email, password) => {
        console.log(email);
        console.log(password);
    });
    formEl.reset();



})