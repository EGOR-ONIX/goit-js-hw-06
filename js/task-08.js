const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value.trim() === "") {
    alert("Всі поля повинні бути заповнені!");
  } else {
    const dataUser = { email: email.value, password: password.value };
    console.dir(dataUser);
    event.currentTarget.reset();
  }
});
