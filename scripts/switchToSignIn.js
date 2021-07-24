const sectionSignIn = document.querySelector('.loginSignIn-screen');
const containerLogin = document.querySelector('.containerForm.login');
const containerSignIn = document.querySelector('.containerForm.signIn');

function Open() {
    document.body.style.overflow = "hidden";
    sectionSignIn.classList.remove('disabled');
    containerLogin.style.display = "none";
    containerSignIn.style.display = "initial"
}