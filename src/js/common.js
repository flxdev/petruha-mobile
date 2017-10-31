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
    var swiperRecipes = $('.tabs-link').data('data-tab-c', 'tab-contact-2');

    $('.row-tabs-company .tabs-link').click(function () {
        var tab_id = $(this).attr('data-tab-c');

        $('.row-tabs-company .tabs-link').removeClass('current-t');
        $('.container-contact').removeClass('current-t');
        $(this).addClass('current-t');
        $("#"+tab_id).addClass('current-t');
    });

    swiperRecipes.click(function () {
        initSwiperRecipes();
    });
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

function initPopup() {
    var centralBlock = $('.container-white-block');
    var body = $('body');
    var feedbackPopup = $('.block-white-feedback');
    var lkPopup = $('.block-white-tabs');
    // var feedbackData = $('.js-btn').data('data-popup', 'feedback');
    // var lkData = $('.js-btn').data('data-popup', 'lk');
    var closeBtn = $('.js-close');

    $('[data-popup="feedback"]').on('click', function () {
        centralBlock.css({
            "left": "0"
        });
        body.addClass('body-hidden');
        feedbackPopup.css({
            "display": "block"
        });
        lkPopup.css({
            "display": "none"
        });
    });

    $('[data-popup="lk"]').on('click', function () {
        centralBlock.css({
            "left": "0"
        });
        body.addClass('body-hidden');
        lkPopup.css({
            "display": "block"
        });
        feedbackPopup.css({
            "display": "none"
        });
    });

    closeBtn.on('click', function () {
        centralBlock.css({
            "left": "-150%"
        });
        body.removeClass('body-hidden');
        setTimeout(function () {
            feedbackPopup.css({
                "display": "none"
            });
            lkPopup.css({
                "display": "none"
            });
        }, 500)
    });
}

function initTabsForm() {
    $('.block-white-block_btn-tabs .tab-link').click(function () {
        var tab_id = $(this).attr('data-tabs');

        $('.block-white-block_btn-tabs .tab-link').removeClass('current-f');
        $('.wrapper-white-block-tabs').removeClass('current-f');

        $(this).addClass('current-f');
        $("#" + tab_id).addClass('current-f');
    })
}

function initNewPass(){
    $('.link-pass-no').on('click', function () {
        $(this).closest('.wrapper-white-block-tabs_form').find('.js-form').removeClass('edit-pass');
        $(this).closest('.js-form').addClass('edit-pass');
    });
}

function initSwiperRecipes() {
    var swiper = new Swiper('.box-recipes-slider', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        pagination: '.swiper-pagination',
        paginationType: 'progress',
        simulateTouch: false
    });

    if($('.number-sl').length){
        $('.number-sl').text(swiper.slides.length);
    } else {
        return
    }

    $('.number-sl').text(swiper.slides.length);

    $('.js-number-slider').on( "click", function() {
        $('.number-active').text(swiper.activeIndex + 1);
    });
}

function initSwiperIngredients() {
    var mySwiper = new Swiper('.swiper-container-ingredients', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        pagination: '.swiper-pagination',
        paginationClickable: true,
        simulateTouch: false
    });
}

function initLk() {
    $('.btn-change-pass').on('click', function () {
        $(this).closest('.box-input').find('.input-box').css({
            "pointer-events": "auto"
        }).focus();
    })
}

function initNewPassLk() {
    $('.btn-change-pass').on('click', function () {
        $('.new-pass').removeClass('display-none');
        $('.js-save').removeClass('disabled-btn');
        $('.new-pass').find('.input-box').css({
            "pointer-events": "auto"
        })
    });

    $('.js-form').each(function () {
        // var disBtn = $(this).hasClass('disabled-btn');
        var disBtn = $('.disabled-btn').length;
        if (disBtn === 1){
            $('.input-box').focus(function () {
                $('.btn-form').removeClass('disabled-btn');
            })
        }
    })
}

function initProductionCycle() {
    $('.wrapper-slider-production').slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        adaptiveHeight: true
    });

    $('.wrapper-slider-production').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        var txt = $('.block-cycle_schedule').find('[data-cycle-eq='+nextSlide+']').data('cycle-txt');
        $('.btn-cycle').removeClass('op-100');
        $('.block-cycle_schedule').find('[data-cycle-eq='+nextSlide+']').addClass('op-100');
        $('.block-cycle_schedule-text').text(txt);
    });
}

function initCycleSchedule() {
    $('.btn-cycle').on('click', function () {
        var txt = $(this).data('cycle-txt');
        $('.block-cycle_schedule').find('.btn-cycle').removeClass('op-100');
        $(this).addClass('op-100');
        $('.block-cycle_schedule-text').text(txt);
        $('.wrapper-slider-production li').eq( $(this).data('cycle-eq') ).click();
    });
}

function initTabs() {
    $('.container-tabs-btn .tabs-link').click(function () {
        var tab_id = $(this).attr('data-tab');

        $('.container-tabs-btn .tabs-link').removeClass('current-t');
        $('.container-content').removeClass('current-t');
        $(this).addClass('current-t');
        $("#"+tab_id).addClass('current-t');
    })
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
    initPopup();
    initTabsForm();
    initNewPass();
    initSwiperRecipes();
    initSwiperIngredients();
    initLk();
    initNewPassLk();
    initProductionCycle();
    initCycleSchedule();
    initTabs();
});