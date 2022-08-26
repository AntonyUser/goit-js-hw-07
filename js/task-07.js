const inputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');
inputEl.addEventListener('mousemove', () => {
    spanEl.style.fontSize = `${inputEl.value}px`;
})