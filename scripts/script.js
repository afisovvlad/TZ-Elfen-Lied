new Swiper('.swiper', {
    loop: true,

    slidesPerView: 3,

    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
});

// избранное
const favoriteHeaderElement = document.getElementById('favorite');
const favoriteCloseElement = document.getElementById('favorite-modal-close');
const favoriteModalElement = document.getElementById('favorite-modal');

favoriteHeaderElement.addEventListener('click', () => {
    basketModalElement.classList.remove('show');
    authModalElement.classList.remove('show');
    favoriteModalElement.classList.add('show');
});

favoriteCloseElement.addEventListener('click', () => {
    favoriteModalElement.classList.remove('show');
});

// логин
const authHeaderElement = document.getElementById('auth');
const authCloseElement = document.getElementById('auth-modal-close');
const authModalElement = document.getElementById('auth-modal');

const authModalSignUpElement = document.getElementById('auth-modal-sign-up');
const authModalSignInElement = document.getElementById('auth-modal-sign-in');
const authModalSignCommonElement = document.getElementById('auth-modal-sign-common');

const authModalTitleElement = document.getElementById('auth-modal-title');

const emailInputElement = document.getElementById('email-input');
const passwordInputElement = document.getElementById('password-input');
const passwordRepeatInputElement = document.getElementById('password-repeat-input');

const formButtonSignUpElement = document.getElementById('auth-modal-form-button-sign-up');
const formButtonSignInElement = document.getElementById('auth-modal-form-button-sign-in');

const regexForEmail = /\S+@\S+\.\S+/;

authHeaderElement.addEventListener('click', () => {
    basketModalElement.classList.remove('show');
    favoriteModalElement.classList.remove('show');
    authModalElement.classList.add('show');
});

authCloseElement.addEventListener('click', () => {
    authModalElement.classList.remove('show');
});

authModalSignUpElement.addEventListener('click', () => {
    authModalTitleElement.innerText = 'Регистрация';
    passwordRepeatInputElement.style.display = 'block';
    formButtonSignUpElement.style.display = 'flex';
    formButtonSignInElement.style.display = 'none';
    authModalSignCommonElement.style.display = 'none';
    authModalSignInElement.style.display = 'block';
});

authModalSignInElement.addEventListener('click', () => {
    authModalTitleElement.innerText = 'Вход';
    passwordRepeatInputElement.style.display = 'none';
    formButtonSignUpElement.style.display = 'none';
    formButtonSignInElement.style.display = 'flex';
    authModalSignCommonElement.style.display = 'block';
    authModalSignInElement.style.display = 'none';
});

formButtonSignUpElement.addEventListener('click', () => {
    authFormValidator('sign-up')
});

formButtonSignInElement.addEventListener('click', () => {
    authFormValidator('sign-in')
});

// корзина
const basketHeaderElement = document.getElementById('basket');
const basketCloseElement = document.getElementById('basket-modal-close');
const basketModalElement = document.getElementById('basket-modal');

basketHeaderElement.addEventListener('click', () => {
    favoriteModalElement.classList.remove('show');
    authModalElement.classList.remove('show');
    basketModalElement.classList.add('show');
});

basketCloseElement.addEventListener('click', () => {
    basketModalElement.classList.remove('show');
});

// карточки товаров
const goodsDayItemElementsArr = Array.from(document.querySelectorAll('.goods-day-item'));
const closeElementsArr = Array.from(document.querySelectorAll('.close'));
const cardModalElementsArr = Array.from(document.querySelectorAll('.card-modal'));
const favoriteButtonElementsArr = Array.from(document.querySelectorAll('.card-modal-stroke-one-button'));

// при клике на товар дня открываем его модалку
goodsDayItemElementsArr.forEach(item => {
    item.addEventListener('click', () => {
        if (item.classList.contains('active')) {
            const itemId = item.getAttribute('data-item-id');
            const modalItem = document.getElementById(`card-modal-${itemId}`);
            modalItem.classList.add('show');
        }
        goodsDayItemElementsArr.forEach(itemEl => {
            itemEl.classList.remove('active')
        });
        item.classList.add('active');
    });
});

closeElementsArr.forEach(item => {
    item.addEventListener('click', () => {
        cardModalElementsArr.forEach(itemEl => {
            itemEl.classList.remove('show')
        });
    });
});

favoriteButtonElementsArr.forEach(item => {
    item.addEventListener('click', () => {
        if (item.classList.contains('active')) {
            item.classList.remove('active');
        } else {
            item.classList.add('active');
        }
    });
});

function authFormValidator(typeForm) {
    emailInputElement.style.borderColor = 'rgb(217, 255, 90)';
    passwordInputElement.style.borderColor = 'rgb(217, 255, 90)';
    passwordRepeatInputElement.style.borderColor = 'rgb(217, 255, 90)';

    let isValid = true;

    if (!regexForEmail.test(emailInputElement.value)) {
        emailInputElement.style.borderColor = 'red';
        isValid = false;
    }

    if (!passwordInputElement.value) {
        passwordInputElement.style.borderColor = 'red';
        isValid = false;
    }

    if (typeForm === 'sign-up' && !(passwordRepeatInputElement.value || (passwordRepeatInputElement.value !== passwordRepeatInputElement.value))) {
        passwordRepeatInputElement.style.borderColor = 'red';
        isValid = false;
    }

    if (!isValid) {
        return false;
    }
}