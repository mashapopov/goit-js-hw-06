let counterValue = 0;
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
let counter = document.querySelector('#value');
console.log(decrementBtn);

decrementBtn.addEventListener("click", () => {
    counterValue -= 1;
    counter.innerHTML = counterValue;
});

incrementBtn.addEventListener("click", () => {
    counterValue += 1;
    counter.innerHTML = counterValue;
});