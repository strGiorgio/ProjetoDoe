const sectionClass = document.querySelector('.loginSignIn-screen');
const wrapperLegend = document.querySelector('.wrapper-legend');
const signInLegend = document.querySelector('.legend-input.signIn');
const loginLegend = document.querySelector('.legend-input.login');
const facebookText = document.querySelector('.button-other-account.facebook'); 
const googleText = document.querySelector('.button-other-account.google');
const button = document.querySelector('.button-input.button');
const wrapperBody = document.querySelector('.wrapper-body');

function switchToSignIn() {
    sectionClass.classList.remove('login');
    sectionClass.classList.add('signIn');

    let input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('placeholder', 'Nome de Usuário');
    input.setAttribute('minlenght', '6');
    input.setAttribute('maxlenght', '24')
    input.setAttribute('title', 'Digite o seu nome de usuário');
    input.classList.add('text-input');

    wrapperBody.appendChild(input);

    wrapperLegend.style.display = 'flex';
    wrapperLegend.style.flexDirection = 'row-reverse';
    wrapperLegend.style.justifyContent = 'flex-end';
    button.innerHTML = "Cadastrar-se";

    facebookText.innerHTML = " Cadastrar-se com facebook"
    googleText.innerHTML = "Cadastrar-se com Google"
}

function switchToLogin() {
    sectionClass.classList.remove('signIn');
    sectionClass.classList.add('login');
}