const ingredients = [
    'Potatoes',
    'Mushrooms',
    'Garlic',
    'Tomatos',
    'Herbs',
    'Condiments',
];
const ingredientsEl = document.querySelector('#ingredients')
const elements = ingredients.map(ingredient => {
    const element = document.createElement('li');
    element.classList.add('item');
    element.textContent = ingredient;
    return element;
});

console.log(elements);
console.log(ingredientsEl);
ingredientsEl.append(...elements);