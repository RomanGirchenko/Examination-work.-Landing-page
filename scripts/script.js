$(document).ready(function () {

    // Скрытое боковое меню навигации
    let nav = true;
    $('.fa').click(function () {

        if (nav) {
            $('nav').css({
                left: '0',
                transition: '1s ease'
            });
        } else {
            $('nav').css({
                left: '-999px',
                transition: '1s ease'
            });
        }
        nav = !nav;
    })


    // Показать/скрыть по кнопке меню товаров
    let menu = true;
    $('.butmenu').click(function () {

        if (menu) {
            $('.menu').fadeIn(500).css({
                display: 'flex',
            });
            $('.butmenu').text('Hide the menu');
        } else {
            $('.menu').fadeOut(500).css({
                display: 'flex',
            });
            $('.butmenu').text('View Our Menu');
        }
        menu = !menu;
    })


    // По нажатию появляется окно авторизации
    $('.reg').click(function () {
        $('.formLogin').fadeIn(1000).css({
            display: 'flex',
        })
    });

    // По нажатию на кнопку форма авторизации скрывается 
    $('.butLog').click(function (e) {
        e.preventDefault();
        $('.formLogin').fadeOut(1000);
    })

    // Показ и скрытие модального окна с пояснением 
    $('.elementBut').click(function () {
        $('.fonModalWindow').fadeIn(500).css({
            display: 'flex',
        })
    });
    $('.closed').click(function () {
        $('.fonModalWindow').fadeOut(500);
    })

    // Баннер
    let counter = 1;
    setInterval(function () {
        document.getElementById('radio' + counter).checked = true;
        counter++;
        if (counter > 4) {
            counter = 1;
        }
    }, 5000);
})