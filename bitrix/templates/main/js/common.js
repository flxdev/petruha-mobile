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


document.addEventListener('DOMContentLoaded', function () {
    initDopMenu();
});