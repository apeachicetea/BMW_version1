const toggleBtn = document.querySelector('.toggle-btn');
const menu = document.querySelector('.nav__menu');
const shopMenu = document.querySelector('.nav__shopmenu');

toggleBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
  shopMenu.classList.toggle('active');
});