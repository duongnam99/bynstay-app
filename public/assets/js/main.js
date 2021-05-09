
$(window).bind('load', function () {
    var $carousel = $('.js-carousel'), $owlCarouselAjax = $('.js-carousel-ajax'),
        $carouselIcons = ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'];

    function runnCarousel() {
        if (!$().owlCarousel) {
            console.log('carousel: owlCarousel plugin is missing.');
            return true;
        }
        if ($carousel.length > 0) {
            $carousel.each(function () {
                var elem = $(this),
                    carouselNav = elem.attr('data-arrows'),
                    carouselDots = elem.attr('data-dots') || true,
                    carouseldotsData = elem.attr('data-dotsData') || false,
                    carouselAutoPlay = elem.attr('data-autoplay') || false,
                    carouselAutoplayTimeout = elem.attr('data-autoplay-timeout') || 5000,
                    carouselAutoWidth = elem.attr('data-auto-width') || false,
                    resizeHeight = elem.attr('auto-height') || false,
                    carouseAnimateIn = elem.attr('data-animate-in') || false,
                    carouseAnimateOut = elem.attr('data-animate-out') || false,
                    carouselLoop = elem.attr('data-loop') || false,
                    carouselMargin = elem.attr('data-margin') || 0,
                    carouselVideo = elem.attr('data-video') || false,
                    carouselItems = elem.attr('data-items') || 4,
                    carouselItemsLg = elem.attr('data-items-lg') || Number(carouselItems),
                    carouselItemsMd = elem.attr('data-items-md') || Number(carouselItemsLg),
                    carouselItemsSm = elem.attr('data-items-sm') || Number(carouselItemsMd),
                    carouselItemsXs = elem.attr('data-items-xs') || Number(carouselItemsSm),
                    carouselItemsXxs = elem.attr('data-items-xxs') || Number(carouselItemsXs);
                if (carouselItemsMd >= 3) {
                    var carouselItemsSm = elem.attr('data-items-sm') || Number(2);
                }
                if (carouselItemsSm >= 2) {
                    var carouselItemsXs = elem.attr('data-items-xs') || Number(2);
                }
                if (carouselItemsXs >= 1) {
                    var carouselItemsXxs = elem.attr('data-items-xxs') || Number(1);
                }
                if (carouselNav == 'false') {
                    carouselNav = false;
                } else {
                    carouselNav = true;
                }
                if (carouselDots == 'false') {
                    carouselDots = false;
                } else {
                    carouselDots = true;
                }
                if (carouseldotsData == 'true') {
                    carouseldotsData = true;
                } else {
                    carouseldotsData = false;
                }
                if (carouselAutoPlay == 'false') {
                    carouselAutoPlay = false;
                }
                var t = setTimeout(function () {
                    elem.owlCarousel({
                        nav: carouselNav,
                        dots: carouselDots,
                        dotsData: carouseldotsData,
                        thumbs: true,
                        thumbsPrerendered: true,
                        navText: $carouselIcons,
                        autoplay: carouselAutoPlay,
                        autoplayTimeout: carouselAutoplayTimeout,
                        autoplayHoverPause: true,
                        autoWidth: carouselAutoWidth,
                        autoHeight: resizeHeight,
                        loop: carouselLoop,
                        margin: Number(carouselMargin),
                        smartSpeed: Number(1300),
                        video: carouselVideo,
                        animateIn: carouseAnimateIn,
                        animateOut: carouseAnimateOut,
                        onInitialize: function (event) {
                            // setTimeout(function () {
                            elem.addClass("owl-carousel owl-theme");
                            //    }, 1000);
                        },
                        responsive: {
                            0: {
                                items: Number(carouselItemsXxs)
                            },
                            480: {
                                items: Number(carouselItemsXs)
                            },
                            768: {
                                items: Number(carouselItemsSm)
                            },
                            992: {
                                items: Number(carouselItemsMd)
                            },
                            1200: {
                                items: Number(carouselItemsLg)
                            }
                        }
                    });
                }, 100);
            });
        }
    }

    
    runnCarousel();

    var format = 'd/m/Y';
    var altFormat = 'd/m/Y';

    $(".js-rangeDate").flatpickr({
        mode: "range",
        altFormat: altFormat,
        dateFormat: format,
        showMonths: 2,
        locale: "vn",
        minDate: "today",
        onClose: function (selectedDates, dateStr, instance) {
            console.log($('.js-rangeDate').val());
        }
    });

    dateConvert = function(date, today){
        if(date) {
            date = date.split('/');
            date = new Date(date[2] + '-' + date[1] + '-' + date[0]);
            date.setHours(0);
        }
        if(today){
            date = new Date();
            date.setHours(0);
        }
        return date;
    };

    var startpicker = flatpickr('.js-date-from', {
        altFormat: altFormat,
        dateFormat: format,
        showMonths: 2,
        locale: "vn",
        minDate: "today",
        onClose: function(selectedDates, dateStr, instance) {
            endpicker.set('minDate', dateStr);
        },
    });

    
    var endpicker = flatpickr('.js-date-to', {
        altFormat: altFormat,
        dateFormat: format,
        showMonths: 2,
        locale: "vn",
        minDate: "today",
        minDate: $('.js-date-from').attr('value'),
        onClose: function(selectedDates, dateStr, instance) {
            startpicker.set('maxDate', dateStr);
            $('.tooltip_help').hide();
        },
    });


    $(".input-name-address").focus(function(){
        $('.list-return').show();
        $(document).mouseup(function(e) 
        {
            var container = $(".list-return");
            if (!container.is(e.target) && container.has(e.target).length === 0) 
            {
                $('.list-return').show();
            }
        });
    });
    $(".input-name-address").blur(function(){
        $(document).mouseup(function(e){
            var container = $(".list-return");
            if (!container.is(e.target) && container.has(e.target).length === 0) 
            {
                $('.list-return').hide();
            }
        });
    });

    $('.item-return a').click(function(){
        $('.input-name-address').val( $.trim($(this).text()));
        $('input[name="item_id"]').val($(this).attr('data-id'));
        $('.list-return').hide();
        alert('id địa điểm: ' + $(this).attr('data-id'))
    });

    $('.js-show-change').click(function(){
        $('.select_count').toggle();
    });
    $('.tgl_options_dt').click(function(){
        $('.input-day-time .select-cus').toggle();
    });
    $('.tgl_options_pp').click(function(){
        $('.input-people .select-cus').toggle();
    });
    $('.act_buy_ticket .detail').click(function(){
        $('.booking').slideToggle();
    });

    var format_2 = 'd/m/Y';
    var altFormat_2 = 'd/m/Y';

    $(".js-date_act").flatpickr({
        mode: "range",
        altFormat: format_2,
        dateFormat: altFormat_2,
        showMonths: 2,
        locale: "vn",
        minDate: "today",
        onClose: function (selectedDates, dateStr, instance) {
            console.log(selectedDates);
            document.getElementsByClassName('js-date_act').value = $('.js-date_act').val();
            console.log($('.js-date_act').val());
        }
    });

    $(document).mouseup(function(e){
        var container = $(".select_count");
        if (!container.is(e.target) && container.has(e.target).length === 0){
            $('.select_count').hide();
        }
    });
    
    $('.item_booking_result .tgl').click(function() {
        $(this).find('i').toggleClass('rt');
        $(this).parent().parent().parent().next().slideToggle();
    });
    
    if($('#filter_price_slider').length > 0){
        var price_slider = document.getElementById('filter_price_slider');
        noUiSlider.create(price_slider, {
            start: [10000000, 40000000],
            connect: true,
            range: {
                'min': 2000000,
                'max': 50000000
            }
        });
        var snapValues = [
            document.getElementById('min-pr'),
            document.getElementById('max-pr')
        ];
        price_slider.noUiSlider.on('update', function (values, handle) {
            snapValues[handle].innerHTML = values[handle];
        });
    }

    $('.slider-main').slick({
        slidesToShow: 1,
        arrows: false,
        asNavFor: '.slider-nav',
        vertical: true,
        autoplay: true,
        verticalSwiping: true,
      });
      
    $('.slider-nav').slick({
        slidesToShow: 4,
        asNavFor: '.slider-main',
        vertical: true,
        focusOnSelect: true,
        autoplay: false,
        arrows: false,
    });
    
    $(window).on('resize orientationchange', function() {
        if ($(window).width() > 1200) {
            $('.slider-nav').slick('unslick');
            $('.slider-nav').slick({
                slidesToShow: 4,
                asNavFor: '.slider-main',
                vertical: true,
                focusOnSelect: true,
                autoplay: false,
                arrows: false,
            });
        }
    });
})