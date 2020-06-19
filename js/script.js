$(function () {
    $(".slider__inner").slick({
        nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
        prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
    })
});


$(document).ready(function () {
    $('a[href^="#"]').click(function () {
        //Сохраняем значение атрибута href в переменной:
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top//можно вычесть высоту меню
        }, 800);
        return false;
    });
});

function myFunctionone() {
    let openmenu = document.getElementsByTagName("ul")[0]
    if (openmenu.style.display === "block") {
        openmenu.style.display = "none"
    } else {
        openmenu.style.display = "block"
    }
}



















