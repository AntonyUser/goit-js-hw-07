function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const changeColorBtnEl = document.querySelector('.change-color');
const bodyEl = document.querySelector('body');
const spanColorEl = document.querySelector('.color');
changeColorBtnEl.addEventListener('click', () => {
    bodyEl.style.backgroundColor = getRandomHexColor();
    spanColorEl.textContent = bodyEl.style.backgroundColor;
})