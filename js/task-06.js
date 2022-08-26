const inputEl = document.querySelector('#validation-input');
inputEl.addEventListener('blur', () => {
    if (inputEl.value.length === 6) {
        if (inputEl.classList.contains('invalid')) {
            inputEl.classList.remove('invalid');
        };
        inputEl.classList.add('valid');
    } else {
        if (inputEl.classList.contains('valid')) {
            inputEl.classList.remove('valid');
        };
        inputEl.classList.add('invalid')
    }

})