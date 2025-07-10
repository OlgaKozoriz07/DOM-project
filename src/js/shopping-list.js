// знаходимо потрібні елементи форми та відображення
const form = document.querySelector('.form');
const itemName = document.querySelector('#itemName');
const itemPrice = document.querySelector('#itemPrice');
const ul = document.querySelector('#itemList');
const totalEl = document.querySelector('#total');

let total = 0; // змінна для зберігання загальної суми

// слухаємо подію відправлення форми
form.addEventListener('submit', event => {
  event.preventDefault(); // не оновлюємо сторінку

  // беремо значення з полів
  const name = itemName.value.trim();
  const price = parseFloat(itemPrice.value.trim()); // перетворюємо на число

  // перевіряємо, чи заповнені обидва поля й чи ціна — це число
  if (name === '' || isNaN(price)) {
    alert('Будь ласка, введіть назву товару та коректну ціну');
    return;
  }

  // створюємо <li>
  const li = document.createElement('li');
  li.textContent = `${name} — ${price} грн`; // текст товару й ціни

  // створюємо кнопку видалення
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '❌';
  deleteBtn.style.marginLeft = '10px';

  // додаємо обробник на кнопку видалення
  deleteBtn.addEventListener('click', () => {
    li.remove(); // видаляємо <li> зі списку
    total -= price; // віднімаємо ціну видаленого товару
    totalEl.textContent = total; // оновлюємо суму на екрані
  });

  // додаємо кнопку в <li>
  li.appendChild(deleteBtn);

  // додаємо <li> у список
  ul.appendChild(li);

  // оновлюємо загальну суму
  total += price;
  totalEl.textContent = total; // оновлюємо суму на екрані

  // очищаємо поля
  itemName.value = '';
  itemPrice.value = '';
  itemName.focus(); // ставимо фокус назад на поле для зручності
});
