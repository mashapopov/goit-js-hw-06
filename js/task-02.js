const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const navList = document.querySelector("ul#ingredients");

const itemsEl = ingredients.map((el) => {

const listEl = document.createElement('li');
listEl.classList.add('item');
listEl.textContent = el;
return listEl;
})

navList.append(...itemsEl);