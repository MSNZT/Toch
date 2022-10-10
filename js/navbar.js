const navToggle = document.querySelector('.navbar-toggle');
const nav = document.querySelector('.navbar');

navToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
  navToggle.classList.toggle('active');
  console.log('click');
});

