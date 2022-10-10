const login = document.querySelector('.login');
const loginPopup = document.querySelector('.login-popup');
const signUp = document.querySelector('.signup');
const signUpPopup = document.querySelector('.signup-pop');
const btnShow = document.querySelectorAll('form .icon-pass');

login.addEventListener('click', () => {
  loginPopup.classList.add('active-popup');
});

signUp.addEventListener('click', () => {
  signUpPopup.classList.add('active-popup');
});

const closePopup = document.querySelectorAll('.popup__close').forEach(close => {
  close.addEventListener('click', () => {
    signUpPopup.classList.remove('active-popup');
    loginPopup.classList.remove('active-popup');
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
