function initDopMenu() {
    $('.block-menu-nav').on('click', function () {
        if($('.openDopMenu').length){
            $(this).removeClass('openDopMenu');
            $('.block-menu-list').css({
                "top": "-1000%"
            });
            $('.icon-prev').css({
                "transform": "rotate(0deg)"
            });
        }else {
            $(this).addClass('openDopMenu');
            $('.block-menu-list').css({
                "top": "58px"
            });
            $('.icon-prev').css({
                "transform": "rotate(180deg)"
            });
        }
    })
}

function initHeaderMenu() {
    $('.block-menu').on('click', function () {
        if($('.open-menu').length){
            $(this).removeClass('open-menu');
            $(this).addClass('close-menu');
            $('.block-menu-header').css({
                "top": "90px"
            });
        } else {
            $(this).removeClass('close-menu');
            $(this).addClass('open-menu');
            $('.block-menu-header').css({
                "top": "-200%"
            });
        }
    });
}

function initSwiperHeader() {
    var swiper = new Swiper('.swiper-container-header', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 5,
        speed: 900,
        autoHeight: true
    });
}

function initSwiperShares() {
    var swiper = new Swiper('.js-shares-sw', {
        // slidesPerView: 2,
        slidesPerView: 'auto',
        spaceBetween: 25,
        autoHeight: true
    });
}

function initSwiperRecipe() {
    var swiper = new Swiper('.js-recipe-sw', {
        slidesPerView: 'auto',
        spaceBetween: 25,
        autoHeight: true
    });
}

initSwiperHeader();

document.addEventListener('DOMContentLoaded', function () {
    initDopMenu();
    initHeaderMenu();
    initSwiperShares();
    initSwiperRecipe();
});