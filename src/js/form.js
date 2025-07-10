const form = document.querySelector('#contactForm');
const btn = document.querySelector('[type="submit"]');
const message = document.querySelector('#formStatus');

form.addEventListener('submit', event => {
  event.preventDefault();
  const name = form.elements.name.value.trim();
  const email = form.elements.email.value.trim();
  const msg = form.elements.message.value.trim();

  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/; // перевірка на валідність мейлу, чи є @ .

  if (name === '') {
    message.textContent = 'Будь ласка, введіть ім’я!';
    message.style.color = 'red';
    return;
  }

  if (email === '') {
    message.textContent = 'Поле не може бути порожнім!';
    message.style.color = 'red';
    return;
  }

  if (!pattern.test(email)) {
    message.textContent = 'Невірний формат email!';
    message.style.color = 'red';
    return;
  }

  if (msg === '') {
    message.textContent = 'Будь ласка, напишіть повідомлення!';
    message.style.color = 'red';
    return;
  }

  message.textContent = '✅ Успішно відправлено!';
  message.style.color = 'green';
});
