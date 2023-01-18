const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
    event.preventDefault();
    const formElements = event.currentTarget.elements;
    const email = formElements.email.value;
    const password = formElements.password.value;
    if (!email || !password) {
        alert('Все поля должны быть заполнены');
    } else {
        console.log({ email, password });
        form.reset();
    }
}


// const form = document.querySelector("form.login-form");
// const emailInput = document.querySelector(`input[name="email"]`);
// const passwordInput = document.querySelector(`input[name="password"]`);

// form.addEventListener("input", handleInput);
// form.addEventListener("submit", handleSubmit);

// const users = [];
// let user = {};

// function handleInput(event) {
//   event.preventDefault();
//   user[event.target.name] = event.target.value;
// }

// function handleSubmit(event) {
//   event.preventDefault();

//   if (emailInput.value === "" || passwordInput.value === "") {
//     return alert("Все поля должны быть заполнены");
//   }
 
//   users.push(user);

//   user = {};
//   event.target.reset();
//   users.map((user) =>
//     console.log(`Email: ${user.email}
// Password: ${user.password}`)
//   );
// }
