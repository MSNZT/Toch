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
