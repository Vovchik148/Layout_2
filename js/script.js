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

