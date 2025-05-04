$(document).ready(function() {
    $('.header-burger').click(function(event) {
        const $navBurger = $('.nav_burger');
        const $headerBurger = $('.header-burger');
        const isActive = $navBurger.hasClass('active');

        // Видаляємо попередні обробники animationend, щоб уникнути накладання
        $navBurger.off('animationend');

        if (isActive) {
            // Анімація закриття
            $navBurger.css('animation', 'burger_anim_close 0.4s forwards');
            
            $navBurger.on('animationend', function() {
                $navBurger.removeClass('active').css('animation', '');
            });
        } else {
            // Анімація відкриття
            $navBurger.addClass('active');
        }

        $headerBurger.toggleClass('active');
    });
});