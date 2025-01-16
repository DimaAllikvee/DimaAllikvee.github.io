(function() {
  document.addEventListener('DOMContentLoaded', function() {
      // Отзывы
      const testimonials = [
          "This is an amazing product! Highly recommend it to everyone.",
          "Great performance and design. Worth every penny!",
          "Perfect for gaming enthusiasts. A must-have accessory.",
          "Exceptional customer service and quality.",
          "Highly functional and beautifully designed."
      ];

      let currentIndex = 0;

      const testimonialText = document.querySelector('.testimonial-text');
      const prevButton = document.querySelector('.prev');
      const nextButton = document.querySelector('.next');

      if (testimonialText && prevButton && nextButton) {
          // Функция обновления текста отзыва
          function updateTestimonial(index) {
              testimonialText.textContent = testimonials[index];
          }

          // Переключение на предыдущий отзыв
          prevButton.addEventListener('click', () => {
              currentIndex = (currentIndex === 0) ? testimonials.length - 1 : currentIndex - 1;
              updateTestimonial(currentIndex);
          });

          // Переключение на следующий отзыв
          nextButton.addEventListener('click', () => {
              currentIndex = (currentIndex === testimonials.length - 1) ? 0 : currentIndex + 1;
              updateTestimonial(currentIndex);
          });

          // Инициализация первого отзыва
          updateTestimonial(currentIndex);
      }

      // Переключатель темы
      const themeToggle = document.getElementById('theme-toggle');

      if (themeToggle) {
          // Проверяем текущий URL
          const isLightTheme = window.location.href.includes('wireframe-light.html');

          // Устанавливаем текст кнопки в зависимости от темы
          themeToggle.textContent = isLightTheme ? 'Switch Theme' : 'Switch Theme';

          // Обработчик клика для переключения тем
          themeToggle.addEventListener('click', () => {
              if (isLightTheme) {
                  // Переход на тёмную тему
                  window.location.href = 'wireframe.html';
              } else {
                  // Переход на светлую тему
                  window.location.href = 'wireframe-light.html';
              }
          });
      }

      // Модальное окно
      const openPopupBtn = document.getElementById('open-popup'); // Кнопка Submit из секции signup
      const popup = document.getElementById('popup');             // Само модальное окно
      const closePopup = document.getElementById('close-popup');  // Крестик (span)
      const popupForm = document.getElementById('popup-form');    // Форма внутри попапа

      if (openPopupBtn && popup && closePopup && popupForm) {
          // Показ попапа при клике на кнопку "Submit"
          openPopupBtn.addEventListener('click', function (event) {
              event.preventDefault(); // Отменяем стандартное поведение кнопки
              popup.style.display = 'block'; // Показываем модальное окно
          });

          // Закрытие попапа при клике на крестик
          closePopup.addEventListener('click', function () {
              popup.style.display = 'none'; 
          });

          // Закрытие попапа при клике вне области окна
          window.addEventListener('click', function (event) {
              if (event.target === popup) {
                  popup.style.display = 'none';
              }
          });

          // Обработка формы внутри попапа
          popupForm.addEventListener('submit', function (e) {
              e.preventDefault();

              // Получаем значения полей
              const nameValue = document.getElementById('name').value.trim();
              const telValue = document.getElementById('tel').value.trim();

              // Проверяем на заполненность полей
              if (!nameValue || !telValue) {
                  alert('Пожалуйста, заполните все поля!');
                  return;
              }

              // Для примера: выводим в консоль или отправляем AJAX-запрос
              console.log('Имя:', nameValue);
              console.log('Телефон:', telValue);

              // После отправки формы скрываем попап
              popup.style.display = 'none';

              // Очистить поля формы
              popupForm.reset();
          });
      }
  });
})();
