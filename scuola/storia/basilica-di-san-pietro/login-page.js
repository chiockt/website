const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "info@thomaschiocchetti.de" && password === "gino1234") {
        window.location.replace("https://www.canva.com/design/DAE2u3lRj2Q/L4GEb2R5nhNjNM95BgOJAg/view?utm_content=DAE2u3lRj2Q&utm_campaign=designshare&utm_medium=link&utm_source=publishpresent");
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})