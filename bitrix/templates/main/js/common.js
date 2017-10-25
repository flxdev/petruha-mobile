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

function initSelect() {
    var closeSelect = $(".select2").select2();
    $(".select2").select2();
}

Dropzone.autoDiscover = false;

function initDropzoneCompany() {
    $('.wrapper-dropzone').dropzone({
        url: "/",
        uploadMultiple: true,
        addRemoveLinks: true,
        maxFilesize: 10,
        dictFileTooBig: 'Файл слишком большой',
        dictResponseError: 'Сервер ответил с ошибкой',
        dictInvalidFileType: 'Неверный тип файла',
        acceptedFiles: ".doc,.docx,.pdf,.txt,image/*",
        init: function () {
            this.on("removedfile", function (file) {
                $.ajax({
                    type: "POST",
                    url: "/",
                    data: "del=" + file['name'] + '&action=FILE',
                    dataType: "html"
                });
            });
            this.on("error", function () {
                $(this).find('.dz-message_waring').addClass('dis-error');
                $(this).find('.dz-message_error').removeClass('dis-error');
            });
            this.on('resetFiles', function () {
                if (this.files.length !== 0) {
                    for (i = 0; i < this.files.length; i++) {
                        this.files[i].previewElement.remove();
                    }
                    this.files.length = 0;
                }
            });
        },
        sending: function (file, xhr, formData) {
            formData.append('action', 'FILE');
        }
    });
}

function clearDropzone() {
    var obj = Dropzone.forElement("div.wrapper-dropzone.dz-started");
    obj.emit("resetFiles");
}

function initTabsCompany() {
    // var swiperRecipes = $('.tabs-link').data('data-tab-c', 'tab-contact-2');

    $('.row-tabs-company .tabs-link').click(function () {
        var tab_id = $(this).attr('data-tab-c');

        $('.row-tabs-company .tabs-link').removeClass('current-t');
        $('.container-contact').removeClass('current-t');
        $(this).addClass('current-t');
        $("#"+tab_id).addClass('current-t');
    });

    // swiperRecipes.click(function () {
    //     initSwiperRecipes();
    // });
}

function initSwiperCompanyB() {
    var swiper = new Swiper('.swiper-slider-company', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 5,
        speed: 900,
        autoHeight: true
    });
}

function initAnchor() {

    $("a.link-anchor-menu").click(function() {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top - 150;
        jQuery("html:not(:animated),body:not(:animated)").animate({
            scrollTop: destination
        }, 800);
        return false;
    });
}


initSwiperHeader();
initDropzoneCompany();

document.addEventListener('DOMContentLoaded', function () {
    initDopMenu();
    initHeaderMenu();
    initSwiperShares();
    initSwiperRecipe();
    initSelect();
    initTabsCompany();
    initSwiperCompanyB();
    initAnchor();
});