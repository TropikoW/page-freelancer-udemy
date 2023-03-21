const buttonInitiate = document.querySelector('#button-initiate');
const buttonUs = document.querySelector('#button-us');
const buttonClient = document.querySelector('#button-client');
const buttonContact = document.querySelector('#button-contact');
const buttonContactFirst = document.querySelector('#contact-first');

buttonClient.addEventListener('click',messageAlert);
buttonContact.addEventListener('click',messageAlert);
buttonContactFirst.addEventListener('click',messageAlert);

function messageAlert() {
    alert('Hi!, we no have for the moment site for this link, please wait');
};