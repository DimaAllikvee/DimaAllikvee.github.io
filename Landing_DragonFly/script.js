// Object with translations
const translations = {
          en: {
              promoTitle: "VGN Dragonfly F1",
              promoSubtitle: "Experience precision and performance",
              learnMore: "Learn More",
              location: "Location: Everton Park, Block 2, Singapore 081002",
              featuresTitle: "Why Choose the Dragonfly F1?",
              featuresText: "The VGN Dragonfly F1 offers unmatched precision, lightweight design, and advanced features for gaming and productivity.",
              keyFeatures: "Key Features",
              feature1: "Ultra-lightweight design for effortless portability",
              feature2: "High-performance optical sensor for precision tracking",
              feature3: "Customizable buttons and RGB lighting",
              feature4: "Durable build quality with premium materials",
              servicesText: "With a focus on innovation and quality, the Dragonfly F1 is crafted to meet the demands of gamers and professionals alike. Discover the difference with advanced ergonomics, industry-leading performance, and stunning aesthetics.",
              faq: "FAQ",
              faqQuestion1: "What makes the Dragonfly F1 unique?",
              faqQuestion2: "What are the key features of the Dragonfly F1?",
              faqAnswer2: "Yes, the Dragonfly F1 features seamless wireless connectivity for a hassle-free experience. It also includes a wired option for maximum reliability.",
              faqAnswer1: "The Dragonfly F1 is designed with lightweight portability, precision tracking, and customizable features to deliver unmatched performance for both gaming and professional use.",
              aboutUsText: "VGN is a leading provider of high-performance gaming peripherals, offering a wide range of products designed to enhance your gaming experience. Our mission is to deliver innovative solutions that empower gamers to reach their full potential.",
          },
          ru: {
              promoTitle: "VGN Dragonfly F1",
              promoSubtitle: "Испытайте точность и производительность",
              learnMore: "Узнать больше",
              location: "Местоположение: Эвертон Парк, Блок 2, Сингапур 081002",
              featuresTitle: "Почему выбрать Dragonfly F1?",
              featuresText: "VGN Dragonfly F1 предлагает непревзойденную точность, легкий дизайн и продвинутые функции для игр и продуктивности.",
              keyFeatures: "Основные характеристики",
              feature1: "Сверхлёгкий дизайн для лёгкой портативности",
              feature2: "Высокопроизводительный оптический сенсор для точного отслеживания",
              feature3: "Настраиваемые кнопки и RGB-подсветка",
              feature4: "Прочный корпус из премиальных материалов",
              servicesText: "Сосредоточив внимание на инновациях и качестве, Dragonfly F1 создан, чтобы удовлетворить потребности геймеров и профессионалов. Узнайте разницу благодаря усовершенствованной эргономике, ведущей в отрасли производительности и великолепной эстетике.",
              faq: "Часто задаваемые вопросы",
              faqQuestion1: "Что делает Dragonfly F1 уникальным?",
              faqQuestion2: "Каковы ключевые особенности Dragonfly F1?",
              faqAnswer2: "Dragonfly F1 реализовано беспроводное подключение, что обеспечивает удобство работы. Кроме того, в комплект входит проводной вариант для максимальной надежности.",
              faqAnswer1: "Dragonfly F1 разработан с учетом легкости, точного отслеживания и настраиваемых функций, обеспечивающих непревзойденную производительность как для игр, так и для профессионального использования.",
              aboutUsText: "VGN - ведущий поставщик высокопроизводительных игровых периферийных устройств, предлагающий широкий ассортимент продуктов, разработанных для улучшения вашего игрового опыта. Наша миссия - предоставить инновационные решения, которые позволят геймерам раскрыть свой потенциал.",
          }
      };
      
      // Function to translate page based on selected language
function translatePage(language) {
          const elements = document.querySelectorAll("[data-translate]");
          elements.forEach((el) => {
              const key = el.getAttribute("data-translate");
              if (translations[language][key]) {
                  el.textContent = translations[language][key];
              }
          });
          localStorage.setItem("language", language); // Save selected language
      }
      
      // Set default language when the page is loaded
      document.addEventListener("DOMContentLoaded", () => {
          const savedLanguage = localStorage.getItem("language") || "en"; // Default to English
          translatePage(savedLanguage);
      });
      
      // Toggle visibility of language switcher on small screens
      function toggleLanguageSwitcher() {
          const languageSwitcher = document.querySelector('.language-switcher');
          const toggleButton = document.querySelector('.language-switcher-toggle');
          
          // Toggle visibility of language switcher
          languageSwitcher.classList.toggle('active');
          
          // Toggle the cross icon
          toggleButton.classList.toggle('active');
          
          // Show/hide language switcher
          if (languageSwitcher.classList.contains('active')) {
              languageSwitcher.style.display = 'flex';
          } else {
              languageSwitcher.style.display = 'none';
          }
      }
      
      // Function to handle screen resizing and adjust language switcher visibility
      function handleResize() {
          const languageSwitcher = document.querySelector('.language-switcher');
          const toggleButton = document.querySelector('.language-switcher-toggle');
          
          if (window.innerWidth >= 768) {
              // If the screen is large enough, show the language buttons and hide the toggle button
              languageSwitcher.style.display = 'flex';
              toggleButton.style.display = 'none';
          } else {
              // If the screen is smaller, show the toggle button and hide the language buttons
              languageSwitcher.style.display = 'none';
              toggleButton.style.display = 'block';
          }
      }
      
      // Listen for window resize events to adjust the language switcher visibility
      window.addEventListener('resize', handleResize);
      
      // Call handleResize when the page loads to set initial visibility based on screen size
      handleResize();
      