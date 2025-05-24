document.addEventListener('DOMContentLoaded', () => {
    const headerBurger = document.querySelector('.header-burger');
    const navBurger = document.querySelector('.nav_burger');

    headerBurger.addEventListener('click', () => {
        const isActive = navBurger.classList.contains('active');

        // Видаляємо попередній обробник, щоб уникнути накладання
        navBurger.removeEventListener('animationend', handleAnimationEnd);

        if (!isActive) navBurger.classList.add('active'); // ← Анімація відкриття (запускається через CSS клас)

        else {
            // Анімація закриття
            navBurger.style.animation = 'burger_anim_close 0.3s forwards';

            // Обробник завершення анімації
            navBurger.addEventListener('animationend', handleAnimationEnd);
        }

        headerBurger.classList.toggle('active');
    });

    function handleAnimationEnd() {
        navBurger.classList.remove('active');
        navBurger.style.animation = '';
    }
});

document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.swiper', {
        loop: true,
        grabCursor: true,
        slidesPerView: 1,

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        keyboard: {
            enabled: true,
            onlyInViewport: true,
            pageUpDown: true,
        },


    });
});

document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById("feedbackModal");
    const btn = document.getElementById("feedbackButton");
    const close = document.querySelector(".close");
    const form = document.getElementById("feedbackForm");

    // Відкриття модального вікна
    if (btn) {
        btn.addEventListener('click', function () {
            if (modal) modal.style.display = "flex";
        });
    }

    // Закриття модального вікна
    if (close) {
        close.addEventListener('click', function () {
            if (modal) modal.style.display = "none";
        });
    }

    // Закриття при кліку на фон
    if (modal) {
        window.addEventListener('click', function (e) {
            if (e.target === modal) {
                modal.style.display = "none";
            }
        });
    }

    // Валідація форми
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            // Очищення помилок
            const errorMessages = document.querySelectorAll('.error-message');
            errorMessages.forEach(msg => msg.textContent = '');

            let isValid = true;

            // Перевірка поля Name
            const name = document.getElementById("name");
            if (!name || !name.value.trim()) {
                if (name) name.nextElementSibling.textContent = "Будь ласка, введіть ім'я";
                isValid = false;
            }

            // Перевірка поля Email (тепер тільки на наявність @)
            const email = document.getElementById("email");
            if (!email || !email.value.includes('@')) {
                if (email) email.nextElementSibling.textContent = "Будь ласка, введіть коректний email (має містити @)";
                isValid = false;
            }

            // Перевірка поля Subject
            const subject = document.getElementById("subject");
            if (!subject || !subject.value.trim()) {
                if (subject) subject.nextElementSibling.textContent = "Будь ласка, введіть тему";
                isValid = false;
            }

            // Перевірка поля Message
            const message = document.getElementById("message");
            if (!message || !message.value.trim()) {
                if (message) message.nextElementSibling.textContent = "Будь ласка, введіть повідомлення";
                isValid = false;
            }

            if (isValid) {
                alert("Дякуємо за ваш відгук!");
                if (modal) modal.style.display = 'none';
                form.reset();
            }
        });
    }
});