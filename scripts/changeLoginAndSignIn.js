const btnLogin = document.querySelector('.legend-input.login');
const btnSignIn = document.querySelector('.legend-input.signIn');
const containerFormLogin = document.querySelector('.containerForm.login');
const containerFormSignIn = document.querySelector('.containerForm.signIn');

function changeToLogin() {
    containerFormSignIn.style.display = "none"
    containerFormLogin.style.display = "initial"
}

function changeToSignIn() {
    containerFormSignIn.style.display = "initial"
    containerFormLogin.style.display = "none"
}