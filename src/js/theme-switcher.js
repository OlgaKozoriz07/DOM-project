const button = document.querySelector('#themeToggle');
const body = document.body;

button.addEventListener('click', () => {
  body.classList.toggle('dark');
  body.classList.toggle('light');
});
