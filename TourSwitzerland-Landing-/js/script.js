// Находим элементы
const openModalBtn = document.getElementById('open-modal-btn');  // Кнопка "Book now →"
const modalOverlay = document.getElementById('modal-overlay');    // Вся подложка
const closeModalBtn = document.getElementById('modal-close');     // Кнопка "×"

// При клике на "openModalBtn" показываем модальное окно
openModalBtn.addEventListener('click', () => {
    modalOverlay.classList.add('open'); // добавляем класс "open"
});

// При клике на "closeModalBtn" прячем модальное окно
closeModalBtn.addEventListener('click', () => {
    modalOverlay.classList.remove('open');
});

// Дополнительно можно закрывать по клику мимо модалки:
modalOverlay.addEventListener('click', (event) => {
    // Если кликнули именно на подложку, а не внутри формы
    if (event.target === modalOverlay) {
        modalOverlay.classList.remove('open');
    }
});