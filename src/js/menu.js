const menuOverlay = document.querySelector('.modal-contacts');
const closeMenuButton = document.querySelector('.modal-contacts__close-btn');
const openMenuBtn = document.querySelector('.contacts__buttons-one');


openMenuBtn.addEventListener('click', e => {
  menuOverlay.classList.remove('d-none');
});

closeMenuButton.addEventListener('click', e => {
  menuOverlay.classList.add('d-none');
});