const toggleMenuBtn = document.querySelector(".nav-toggle");
const menuPopup = document.querySelector("#menu-popup");
const menu = document.querySelector("#menuNav").cloneNode(1);
const body = document.querySelector(".page-body");

toggleMenuBtn.addEventListener('click', () => {
  toggleMenuBtn.classList.toggle('active');
  menuPopup.classList.toggle('active');
  body.classList.toggle('active');
  renderPopup();
});

function renderPopup() {
  menuPopup.appendChild(menu);
}

// function navToggle() {
//   nav.classList.toggle("active");
//   toggle.classList.toggle("active");
//   body.classList.toggle("lock");
// }

// let timeStamp = Date.now();
// let now = new Date();
// let ms = now.getTime();
// console.log(ms);
