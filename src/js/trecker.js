const form = document.querySelector('.tracker-form');

const moodDate = document.querySelector('.moodDate');

const moodSelect = document.querySelector('.moodSelect');

const moodList = document.querySelector('.moodList');

form.addEventListener('submit', event => {
  event.preventDefault(); // блокуємо стандартне відправлення форми

  // беремо значення з полів

  const date = moodDate.value; // отримуємо дату

  const mood = moodSelect.value; // отримуємо обраний настрій

  // перевіряємо, чи обидва поля заповнені

  if (!date || !mood) {
    alert('Будь ласка, вибери дату й настрій!'); // попереджаємо, якщо щось не заповнено

    return; // виходимо з функції
  }

  // створюємо новий елемент списку <li>

  const li = document.createElement('li');

  li.textContent = `${date} - ${mood}`; // встановлюємо текст: дата + настрій

  // створюємо кнопку видалення

  const deleteBtn = document.createElement('button');

  deleteBtn.textContent = '❌';

  deleteBtn.addEventListener('click', () => {
    li.remove(); // видаляємо <li> зі списку
  });

  // додаємо кнопку в <li>

  li.appendChild(deleteBtn);

  // додаємо <li> у список

  moodList.appendChild(li);

  // очищаємо поля форми

  moodDate.value = '';

  moodSelect.value = '';
});
