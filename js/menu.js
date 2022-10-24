const toggleMenuBtn = document.querySelector("#main-toggle");
const toggleUserMenuBtn = document.querySelector("#user-toggle");
const menuPopup = document.querySelector("#menu-popup");
const userMenu = document.querySelector("#user-menu");
const menu = document.querySelector("#menuNav").cloneNode(1);
// const userNav = document.querySelector("#userNav").cloneNode(2);
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
