const formLogin = document.querySelector(".login-form");

formLogin.addEventListener("submit", (event) => {
    event.preventDefault();

    const { email, password } = formLogin.elements;
    const emailValue = email.value.trim();
    const passValue = password.value.trim();

    if (!emailValue || !passValue) {
        alert("All form fields must be filled in");
        return
    }
    const formResult = {
        email: emailValue,
        password: passValue,
    }

    console.log(formResult);
    formLogin.reset();
 });
