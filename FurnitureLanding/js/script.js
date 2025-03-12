document.addEventListener('DOMContentLoaded', () => {
    const openModalButtons = document.querySelectorAll('.design-button');
    const modalOverlay = document.getElementById('purchase-modal-overlay');
    const closeModalBtn = document.getElementById('modal-close-btn');

    // Функция для открытия модалки
    function openModal() {
        modalOverlay.classList.add('open');
    }

    // Функция для закрытия модалки
    function closeModal() {
        modalOverlay.classList.remove('open');
    }

    // На каждую кнопку "Shop Now" (или любую с классом design-button) вешаем событие открытия
    openModalButtons.forEach(btn => {
        btn.addEventListener('click', openModal);
    });

    // При клике на "×" закрываем модалку
    closeModalBtn.addEventListener('click', closeModal);

    // Закрытие при клике на тёмный фон
    modalOverlay.addEventListener('click', (event) => {
        if (event.target === modalOverlay) {
            closeModal();
        }
    });

    // Дополнительно: при сабмите формы можем выводить alert или отправлять
    // AJAX. Пока что оставим как есть:
    const modalForm = modalOverlay.querySelector('.modal-form');
    modalForm.addEventListener('submit', (event) => {
        event.preventDefault();
        // Например, выводим сообщение:
        alert("Thank you! Your order is being processed.");
        // Закрываем форму
        closeModal();

        // Очистка полей, если надо
        modalForm.reset();
    });
});





document.addEventListener("DOMContentLoaded", () => {

    const translations = {
        en: {
            // Меню (header)
            navHome: "Home",
            navProduct: "Product",
            navServices: "Services",
            navAboutUs: "About us",
            langButton: "ENG/EST",

            // Header
            headerTitle: "BEST FURNITURE\nFOR YOUR HOME",
            headerSubtitle: "Our practice is designing complete environments exceptional buildings, communities and place in special situations, here a uniques history",
            headerCtaBtn: "Shop Now",

            // body-section
            bodySubtitle: "WE BELIEVE DESERVE A BEAUTIFUL HOME",
            bodyTitle: "AFTER 20 YEARS OF CRAFTING HIGH-QUALITY FURNITURE, WE ARE EXCITED TO BRING OUR COLLECTION TO THE SWISS MARKET.",

            // design-section
            designTitle: "Design & Personalize Your Furniture",
            designText: "With years of expertise in crafting high-quality furniture, we bring you the freedom to create pieces that match your style. Explore our collection and customize every detail to make your home truly unique.",
            designBtn: "Shop Now",

            // product-section
            productHeading: "THE MOST SOUGHT-AFTER & HIGHLY VALUED PRODUCT",
            productSubtitle: "Discover our most in-demand products that everyone is talking about.",
            productTabNew: "New Product",
            productTabSpecial: "Special Price",
            productTabBest: "Best Sellers",

            // product names / prices
            productName1: "FAUX SHEARLING ARMCHAIR",
            productPrice1: "439 €",
            productName2: "FOLDING BOUCLÉ ARMCHAIR",
            productPrice2: "439 €",
            productName3: "WOODEN SIDE TABLE",
            productPrice3: "439 €",
            productName4: "OAK HALLWAY",
            productPrice4: "439 €",
            productName5: "MAGAZINE RACK",
            productPrice5: "439 €",
            productName6: "ELM WOOD SHELVING",
            productPrice6: "439 €",

            // guarantee-section
            guaranteeSubtitle: "Why Buy From Us",
            guaranteeTitle: "Lifetime Guarantee",
            guaranteeCardTitle1: "Premiere Hardwoods",
            guaranteeCardText1: "We source only top-quality hardwoods...",
            guaranteeCardTitle2: "Excellent Customer Service",
            guaranteeCardText2: "We’re a custom furniture maker...",
            guaranteeCardTitle3: "In-Home Shipping",
            guaranteeCardText3: "We work with a network of shipping companies...",
            guaranteeCardTitle4: "Unique Style",
            guaranteeCardText4: "A unique and different style from other furniture...",

            // footer
            footerAbout: "About us",
            footerItinerary: "Product",
            footerTestimonials: "Design",
            footerContacts: "Guaranatee",

            // Модальное окно
            modalTitle: "Complete Your Purchase",
            modalSubtitle: "Enter your details so we can process your order quickly and safely.",
            modalEmailLabel: "Email:",
            modalPhoneLabel: "Phone:",
            modalAddressLabel: "Address:",
            modalSubmitBtn: "Submit"
        },

        est: {
            // Меню (header)
            navHome: "Avaleht",
            navProduct: "Tooted",
            navServices: "Teenused",
            navAboutUs: "Meist",
            langButton: "EST/ENG",

            // Header
            headerTitle: "PARIM MÖÖBEL\nSINU KODU JAOKS",
            headerSubtitle: "Meie praktika on täiuslike keskkondade kavandamine: silmapaistvad hooned, kogukonnad ja kohad erilistes olukordades.",
            headerCtaBtn: "Osta kohe",

            // body-section
            bodySubtitle: "ME USUME, ET IGA KODU VÕIKS OLLA ILUS",
            bodyTitle: "PÄRAST 20 AASTAT KÕRGKVALITEEDILISE MÖÖBLI LOOMIST OLEME VALMIS TUTVUSTAMA OMA KOLLEKTSIOONI ŠVEITSI TURUL.",

            // design-section
            designTitle: "Disaini & Personaliseeri Oma Mööbel",
            designText: "Aastatepikkune kogemus kvaliteetse mööbli valmistamisel annab võimaluse luua just sinu stiilile vastavad esemed. Uuri meie kollektsiooni ja kohanda iga detaili, et sinu kodu oleks tõeliselt ainulaadne.",
            designBtn: "Vaata veel",

            // product-section
            productHeading: "KÕIGE NÕUTUM & KÕRGEIMALT HINNATUD TOODE",
            productSubtitle: "Avasta meie kõige populaarsemad tooted, millest kõik räägivad.",
            productTabNew: "Uus Toode",
            productTabSpecial: "Soodushind",
            productTabBest: "Parimad Müüjad",

            // product names / prices
            productName1: "FAUX SHEARLING TUGITOOL",
            productPrice1: "439 €",
            productName2: "KOKKUPANDAV BOUCLÉ TUGITOOL",
            productPrice2: "439 €",
            productName3: "PUITKÜLGLAUD",
            productPrice3: "439 €",
            productName4: "TAMMEST ESIKUKOMPLEKT",
            productPrice4: "439 €",
            productName5: "AJAKIRJAHOIDIK",
            productPrice5: "439 €",
            productName6: "JALAKA PUIDUST RIIUL",
            productPrice6: "439 €",

            // guarantee-section
            guaranteeSubtitle: "Miks Osta Meilt",
            guaranteeTitle: "Eluaegne Garantii",
            guaranteeCardTitle1: "Tipptasemel Puitmaterjalid",
            guaranteeCardText1: "Kasutame ainult kõrgekvaliteedilisi puitmaterjale...",
            guaranteeCardTitle2: "Suurepärane Klienditeenindus",
            guaranteeCardText2: "Me oleme eritellimusel mööbli valmistaja...",
            guaranteeCardTitle3: "Transport Koju",
            guaranteeCardText3: "Teeme koostööd veofirmade võrgustikuga...",
            guaranteeCardTitle4: "Ainulaadne Stiil",
            guaranteeCardText4: "Erilist ja teistest erinevat stiili mööbel annab luksusliku ilme...",

            // footer
            footerAbout: "Meist",
            footerItinerary: "Reisikava",
            footerTestimonials: "Tagasiside",
            footerContacts: "Kontaktid",

            // Модальное окно
            modalTitle: "Lõpeta Oma Ost",
            modalSubtitle: "Sisesta andmed, et saaksime su tellimuse kiiresti ja turvaliselt vormistada.",
            modalEmailLabel: "Email:",
            modalPhoneLabel: "Telefon:",
            modalAddressLabel: "Aadress:",
            modalSubmitBtn: "Saada"
        }
    };

    // Текущее состояние языка (по умолчанию EN)
    let currentLang = "en";

    // Находим кнопку переключения языка
    const langBtn = document.getElementById("lang-btn");

    // Функция, которая меняет текст на странице по data-lng-key
    function setLanguage(lang) {
        const elements = document.querySelectorAll("[data-lng-key]");
        elements.forEach((el) => {
            const key = el.getAttribute("data-lng-key");
            // Если нет перевода в объекте, ставим ??? для наглядности
            el.textContent = translations[lang][key] || "???";
        });
    }

    // При клике на кнопку - переключаем язык
    langBtn.addEventListener("click", () => {
        if (currentLang === "en") {
            // Переключаемся на эстонский
            setLanguage("est");
            currentLang = "est";
        } else {
            // Переключаемся на английский
            setLanguage("en");
            currentLang = "en";
        }
    });

    // При загрузке страницы ставим язык EN
    setLanguage("en");
});
