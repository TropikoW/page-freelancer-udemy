const buttonInitiate = document.querySelector('#button-initiate');
const buttonAbout = document.querySelector('#button-about');
const buttonClient = document.querySelector('#button-client');
const buttonContact = document.querySelector('#button-contact');
const buttonContactFirst = document.querySelector('#contact-first');
const modal = document.querySelector('#modal');
const buttonClose = document.querySelector('#btns__close');
const btnsFormSend = document.querySelector('#btns-form-send');

buttonClient.addEventListener('click',showModal);
buttonContact.addEventListener('click',showModal);
buttonContactFirst.addEventListener('click',showModal);
buttonClose.addEventListener('click',closeModal);
btnsFormSend.addEventListener('click',showModal);

function showModal(e) {
    e.preventDefault();
    modal.classList.add('modal__show');
};

function closeModal(e) {
    e.preventDefault();
    modal.classList.remove('modal__show');
}