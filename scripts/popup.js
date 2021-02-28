//Записываем необходимые элементы в переменные
let popup = document.querySelector('.popup');
let openPopupButton = document.querySelector('.profile__edit-button');
let closePopupButton = document.querySelector('.popup__close');
let submitPopupButton = document.querySelector('.popup__save-button');
let nameInput = document.querySelector('.popup__field.popup__field_type_name');
let jobInput = document.querySelector('.popup__field.popup__field_type_achievement');
let profileTitle = document.querySelector('.profile__title');
let profileSubtitle = document.querySelector('.profile__subtitle');
let formElement = document.querySelector ('.popup__container');

// Пишем обработчики, которые будут применяться при:
//Клике  на кнопку "редактировать"
function openPopup() {
    popup.classList.add('popup_opened');
    nameInput.value = profileTitle.textContent;
    jobInput.value = profileSubtitle.textContent;
}

//Клике  на кнопку "закрыть"
function closePopup() {
    popup.classList.remove('popup_opened');
}

//Внесении данных в поля формы
function formSubmitHandler (evt) {
    evt.preventDefault(); 
    profileTitle.textContent = nameInput.value;
    profileSubtitle.textContent = jobInput.value;
    popup.classList.remove('popup_opened');
}

//Вешаем слушателя на кнопки
//"редактировать"
openPopupButton.addEventListener('click', openPopup);
//"закрыть"
closePopupButton.addEventListener('click', closePopup);

//Вешаем слушателя на внесении данных в поля формы
formElement.addEventListener('submit', formSubmitHandler);