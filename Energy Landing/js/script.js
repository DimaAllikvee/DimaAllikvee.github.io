document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const headerNav = document.getElementById('header-nav');

    hamburger.addEventListener('click', () => {
        // Переключаем класс .open у меню
        headerNav.classList.toggle('open');
    });
});



    document.addEventListener("DOMContentLoaded", function() {
    const openModalBtn = document.getElementById("open-modal-btn");
    const modalOverlay = document.getElementById("modal-overlay");
    const closeModalBtn = document.getElementById("modal-close-btn");
    const contactForm = document.getElementById("contact-form");

    // Открытие модалки
    openModalBtn.addEventListener("click", () => {
    modalOverlay.classList.add("open");
});

    // Закрытие модалки по "крестику"
    closeModalBtn.addEventListener("click", () => {
    modalOverlay.classList.remove("open");
});

    // Закрытие при клике вне модального окна
    modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) {
    modalOverlay.classList.remove("open");
}
});

    // (Не обязательно) – обработка формы
    contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // Здесь логика отправки ...
    alert("Form submitted!");
    modalOverlay.classList.remove("open");
});
});

