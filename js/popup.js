// const login = document.querySelector('.login');
// const loginPopup = document.querySelector('.login-popup');
// const signUp = document.querySelector('.signup');
// const signUpPopup = document.querySelector('.signup-pop');
// const btnShow = document.querySelectorAll('form .icon-pass');
// const popupBtn = document.querySelectorAll('.popup__btn');
// let textT = document.querySelector('.popup__wrapper .congr');

// login.addEventListener('click', () => {
//   loginPopup.classList.add('active-popup');
// });

// signUp.addEventListener('click', () => {
//   signUpPopup.classList.add('active-popup');
// });

// const closePopup = document.querySelectorAll('.popup__close').forEach(close => {
//   close.addEventListener('click', () => {
//     signUpPopup.classList.remove('active-popup');
//     loginPopup.classList.remove('active-popup');
//   });
// });

// popupBtn.forEach(btn => {
//   btn.addEventListener('click', () => {
//     textT.textContent = 'Поздравляю с успешной регистрацией';
//     setTimeout(function () {
//       textT.textContent = '';
//     }, 3000);
//   });
// });

const popupBtns = document.querySelectorAll('.user-nav__link');
const closePopup = document.querySelectorAll('.close-btn');
const btnShow = document.querySelectorAll('.popup .icon-pass');

popupBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    const popup = btn.getAttribute('data-popup');

      document.getElementById(popup).classList.toggle('popup-open');
  });
});

closePopup.forEach((btn) => {
  btn.addEventListener('click', () => {
    const popup = btn.closest('.popup').classList.remove('popup-open');
  });
});

btnShow.forEach(item => {
  let show = false;
  item.addEventListener('click', () => {
    show = !show;
    item.parentElement.children[0].setAttribute(
      'type',
      show ? 'text' : 'password'
    );
    if (show) {
      item.innerHTML = 'visibility';
    } else {
      item.innerHTML = 'visibility_off';
    }
  });
});
