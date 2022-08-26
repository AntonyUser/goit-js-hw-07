const categoryEl = document.querySelectorAll('.item');
console.log('Number of categories:', categoryEl.length);
categoryEl.forEach(elem => {
    console.log('Category:', elem.firstElementChild.textContent);
    console.log('Elements:', elem.lastElementChild.children.length);
})