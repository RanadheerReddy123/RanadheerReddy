/*Preloader*/
$(window).on('load', function () {
    $('#preloader_status').fadeOut();
    $('#preloader').fadeOut('slow');
});
            /*Owl Carousel*/
           /*Team Owl Carousel*/
$(document).ready(function () {
    $("#team-right").owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 750,
        loop: true,
        dots: false,
        nav: true,
        navText: ['<span><i class="fas fa-angle-left"></i></span>', '<span><i class="fas fa-angle-right"></i></span>'],

    });
});
/*Testimonials Owl Carousel*/
$(document).ready(function () {
    $("#testimonial-slider").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 750,
        loop: true,
        dots: false,
        nav: true,
        navText: ['<span><i class="fas fa-angle-left"></i></span>', '<span><i class="fas fa-angle-right"></i></span>'],

    });
});
/*Clients Owl Carousel*/   
$(document).ready(function () {
    $("#clients-list").owlCarousel({
        items: 6,
        autoplay: true,
        smartSpeed: 750,
        loop: true,
        dots: false,
        nav: true,
        navText: ['<span><i class="fas fa-angle-left"></i></span>', '<span><i class="fas fa-angle-right"></i></span>'],

    });
});
/*Progress bar*/
$(document).ready(function () {
    $('#progress-elements').waypoint(function () {

        $('.progress-bar').each(function () {
            $(this).animate({
                width: $(this).attr('aria-valuenow') + '%'
            }, 1000);
        });
        this.destroy();
    }, {
        offset: 'bottom-in-view'
    });
});
/*Responsive tabs*/
$(document).ready(function () {
    $('#service-tabs').responsiveTabs({
        animation: 'slide'
    });
});
/*Isotope*/
$(window).on('load', function () {
    // init Isotope
    var $grid = $('.grid').isotope({});
    // filter items on button click
    $('.filter-button-group').on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({
            filter: filterValue
        });
        /*Portfolio Buttons*/
        $(".portfolio-buttons").find('.active').removeClass('active');
        $(this).addClass('active');
    });
});
/*Magnefic popup*/
$(document).ready(function () {
    $('.portfolio-item').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true,
        }
    });
});
/*Counter*/
$(document).ready(function () {
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
});
/*Navigation*/
$(document).ready(function () {
    showHideWhiteNav();
    $(window).scroll(function () {
        showHideWhiteNav();
    });

    function showHideWhiteNav() {
        if ($(window).scrollTop() > 50) {
            //show white nav
            $('nav').addClass("white-nav-top");
            //Show back to top
            $('#back-to-top').fadeIn();
        } else {
            //hide white nav
            $('nav').removeClass("white-nav-top");
            //Hide back to top
            $('#back-to-top').fadeOut();
        }
    }
});
/*Smooth Scroll*/
$(document).ready(function () {
    $(a.smooth-scroll).click(function (event) {
        event.preventDefault();
        var section_id = $(this).attr('href');
        $('html,body').animate({
            scrollTop: $(section_id).offset().top - 65
        }, 1000);
    });
});