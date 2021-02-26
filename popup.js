let openPopupButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let closePopupButton = document.querySelector('.popup__close');
let nameInput = document.querySelector('.popup__field-name');
let jobInput = document.querySelector('.popup__field-achievement');

function openPopup() {
    popup.classList.add('popup_opened');
}

openPopupButton.addEventListener('click', openPopup);

function closePopup() {
    popup.classList.remove('popup_opened');
}

closePopupButton.addEventListener('click', closePopup);


function formSubmitHandler (evt) {
    evt.preventDefault(); 
    nameInput.textContent = document.querySelector('.profile__title').value;
    jobInput.textContent = document.querySelector('.profile__subtitle').value;
}

popup.addEventListener('submit', formSubmitHandler)


