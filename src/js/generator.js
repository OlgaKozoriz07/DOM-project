// масив із цитатами/афірмаціями

const quotes = [
  'Ти крута 😎',

  'Сьогодні твій день ✨',

  'Усе вдасться ❤️',

  'Не забувай відпочивати 🌸',
];

// масив кольорів для фону

const colors = ['#f8b400', '#6a0572', '#008891', '#e23e57'];

const btn = document.querySelector('.generateBtn');

const result = document.querySelector('.result');

btn.addEventListener('click', () => {
  // генеруємо випадковий індекс для цитати

  const randomQuoteIndex = Math.floor(Math.random() * quotes.length);

  // генеруємо випадковий індекс для кольору

  const randomColorIndex = Math.floor(Math.random() * colors.length);

  // показуємо випадкову цитату

  result.textContent = quotes[randomQuoteIndex];

  // змінюємо фон сторінки на випадковий колір

  document.body.style.backgroundColor = colors[randomColorIndex];
});
