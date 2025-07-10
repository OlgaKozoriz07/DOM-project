const input = document.querySelector('#taskInput');
const btn = document.querySelector('#addTaskBtn');
const ul = document.querySelector('#taskList');

btn.addEventListener('click', () => {
  const value = input.value.trim(); // беремо текст із поля та обрізаємо пробіли
  if (value === ''); // якщо нічого не ввели — виходимо

  const li = document.createElement('li');

  // створюємо <span> для тексту задачі
  const taskText = document.createElement('span');
  taskText.textContent = value;

  // створюємо кнопку видалення ❌
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '❌';

  // додаємо обробник на кнопку ❌ — видаляє задачу
  deleteBtn.addEventListener('click', () => {
    li.remove();
  });
  // додаємо обробник на подвійний клік по тексту — відмічає як виконане
  taskText.addEventListener('dblclick', () => {
    taskText.classList.toggle('done'); // додає/знімає клас done
  });
  // збираємо <li>: спочатку текст, потім кнопка
  li.appendChild(taskText);
  li.appendChild(deleteBtn);

  // додаємо <li> у список
  ul.appendChild(li);

  // очищаємо поле вводу та ставимо фокус назад
  input.value = '';
  input.focus();
});
