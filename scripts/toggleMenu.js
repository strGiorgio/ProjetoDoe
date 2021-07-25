const divLoginSignIn = document.querySelector('#wrapper-loginSignIn');
const dropdownMenu = document.querySelector('.dropdown');

const sectionSignIn_2 = document.querySelector('.loginSignIn-screen');
const sectionLogin_2 = document.querySelector('.loginSignIn-screen');

const form = document.querySelector('.containerForm.signIn');
const userName = document.querySelector('#dropdownMenuButton1');
const valueName = document.querySelector('.text-input.firstName');


form.addEventListener('submit', submit);

function submit() {
    userName.innerHTML = `${valueName.value}`
    divLoginSignIn.classList.toggle('inactive');
    dropdownMenu.classList.toggle('inactive');

    sectionSignIn_2.classList.add('disabled')
    sectionLogin_2.classList.add('disabled')
    document.body.style.overflow = "initial";
};