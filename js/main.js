//hover tabs
(function ($) {
    $(function () {
        $(document).off('click.bs.tab.data-api', '[data-hover="tab"]');
        $(document).on('mouseenter.bs.tab.data-api', '[data-toggle="tab"], [data-hover="tab"]', function () {
            $(this).tab('show');
        });
    });
})(jQuery);
// menu+lv
$(document).ready(function () {
    // Navigation Scroll
    $(window).scroll(function (event) {
        Scroll();
    });
    $('.navbar ul li a').on('click', function () {
        $('html, body').animate({
            scrollTop: $(this.hash).offset().top - 5
        }, 1000);
        return false;
    });
    // User define function
    function Scroll() {
        var contentTop = [];
        var contentBottom = [];
        var winTop = $(window).scrollTop();
        var rangeTop = 200;
        var rangeBottom = 500;
        $('.navbar').find('.scroll a').each(function () {
            contentTop.push($($(this).attr('href')).offset().top);
            contentBottom.push($($(this).attr('href')).offset().top + $($(this).attr('href')).height());
        })
        $.each(contentTop, function (i) {
            if (winTop > contentTop[i] - rangeTop) {
                $('.navbar li.scroll').removeClass('active').eq(i).addClass('active');
            }
        })
    };
    /* Client-Carousel Slider Active
    =============================*/
    $("#owl-demo").owlCarousel({
        pagination: true
        , slideSpeed: 300
        , paginationSpeed: 300
        , singleItem: true
        , autoPlay: true
        , // "singleItem:true" is a shortcut for:
        //       items : 1, 
        //       itemsDesktop : false,
        //       itemsDesktopSmall : false,
        //       itemsTablet: false,
        //       itemsMobile : false
    });
    //nav-menu
    var trigger = $('.hamburger')
        , overlay = $('.overlay')
        , isClosed = false;
    trigger.click(function () {
        hamburger_cross();
    });

    function hamburger_cross() {
        if (isClosed == true) {
            overlay.hide();
            trigger.removeClass('is-open');
            trigger.addClass('is-closed');
            isClosed = false;
        }
        else {
            overlay.show();
            trigger.removeClass('is-closed');
            trigger.addClass('is-open');
            isClosed = true;
        }
    }
    $('[data-toggle="offcanvas"]').click(function () {
        $('#wrapper').toggleClass('toggled');
    });
    /* SCROLLSPY ACTIVE
       =======================*/
    $('body').scrollspy({
        target: '.mainmenu'
        , offset: 50
    });
    /* wow */
    var wow = new WOW({
        boxClass: 'wow', // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset: 0, // distance to the element when triggering the animation (default is 0)
        mobile: false, // trigger animations on mobile devices (default is true)
        live: false // act on asynchronously loaded content (default is true)
    });
    wow.init();
    /* Scroll to top
        ===================*/
    $.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>'
        , easingType: 'linear'
        , scrollSpeed: 900
        , animation: 'fade'
    });
    /* phôt-i-am */
    $('.about-photo').on('mouseenter', function () {
        $('.about-photo .about-address').slideToggle(300);
    });
    $('.about-photo').on('mouseleave', function () {
        $('.about-photo .about-address').slideToggle(300);
    });
    /* menu */
});
/* text-type */
$(function () {
    var message = {
        message: [
			'Front End Developer!'
			, 'Web Developer'
      , 'javascript, css, sass,...;',

		]
        , counterS: 0
        , counterL: 0
        , deleteS: false
        , init: function () {
            this.cacheElem();
            this.type();
        }
        , cacheElem: function () {
            this.$text = $('.text');
        }
        , type: function () {
            var message = this.message[this.counterS]
                , that = this
                , speed = 0;
            message = !this.deleteS ? message.slice(0, ++this.counterL) : message.slice(0, --this.counterL);
            if (this.message[this.counterS] != message && !this.deleteS) {
                this.$text.text(message);
                speed = 90;
            }
            else {
                this.deleteS = true;
                speed = this.message[this.counterS] == message ? 1000 : 40;
                this.$text.text(message);
                if (message == '') {
                    this.deleteS = false;
                    this.counterS = this.counterS < this.message.length - 1 ? this.counterS + 1 : 0;
                }
            }
            setTimeout(function () {
                that.type()
            }, speed);
        }
    };
    message.init();
});