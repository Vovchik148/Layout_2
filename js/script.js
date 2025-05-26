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
    const form = document.getElementById('feedbackForm');
    const modal = document.getElementById('feedbackModal');
    const successMsg = document.getElementById('feedbackSuccess');
    const closeBtn = document.getElementById('closeSuccessMsg');

    // Відправка форми
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            // Валідація
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const message = document.getElementById('message').value.trim();

            if (!name || !email || !subject || !message) {
                alert("Будь ласка, заповніть всі обов'язкові поля!");
                return;
            }

            // Показуємо повідомлення
            successMsg.style.display = 'block';

            // Ховаємо форму
            if (modal) {
                modal.style.display = 'none';
            }

            // Очищаємо поля
            form.reset();
        });
    }

    // Закриття повідомлення (без перезавантаження)
    if (closeBtn) {
        closeBtn.addEventListener('click', function () {
            successMsg.style.display = 'none';
            // Форма залишається прихованою до ручного перезавантаження!
        });
    }
});