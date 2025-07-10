const images = [
  'https://picsum.photos/id/237/400/300', // собака
  'https://picsum.photos/id/1074/400/300', // лев
  'https://picsum.photos/id/1084/400/300', // морж
];

const captions = ['Собака', 'Лев', 'Морж'];

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');
const img = document.querySelector('#sliderImage');
const caption = document.querySelector('#caption');

// поточний індекс картинки у масиві
let currentIndex = 0;

// одразу при завантаженні сторінки встановлюємо першу картинку й підпис
updateImg();

// функція оновлення картинки й підпису
function updateImg() {
  img.src = images[currentIndex]; // міняємо src у <img>
  caption.textContent = captions[currentIndex]; // міняємо текст підпису
}

// слухаємо клік по кнопці "вперед"
nextBtn.addEventListener('click', () => {
  // якщо дійшли до кінця масиву — переходимо на початок
  currentIndex = (currentIndex + 1) % images.length;
  updateImg(); // оновлюємо картинку й підпис
});

// слухаємо клік по кнопці "назад"
prevBtn.addEventListener('click', () => {
  // Якщо ми на початку — переходимо в кінець
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateImg(); // оновлюємо картинку й підпис
});
