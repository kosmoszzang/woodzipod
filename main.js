$('document').ready(function(){
    var albumswiper = new Swiper(".album_swiper", {
        loop: true,
        effect: "fade",
        fadeEffect: { 
        crossFade: true 
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        on: {
            slideChange: function(){
                $("#dsg1").prop("checked", false);
                $("label").removeClass("act");
                $("label").eq(this.realIndex).addClass("act");
            }
        }
    });
    $("label").on('click', function(e) {
        const idx = $(this).index();
        $("label").removeClass("act");
        $(this).addClass("act");
        $('.swiper-slide').removeClass('swiper-slide-active');
        $('.swiper-slide').eq(idx).addClass('swiper-slide-active');
        albumswiper[idx].slideTo(0);
    });
    var albgswiper = new Swiper(".albumbg_swiper", {
        loop: true,
        effect: "fade",
        fadeEffect: { 
        crossFade: true 
        },
    });
    albumswiper.controller.control = albgswiper;
    albgswiper.controller.control = albumswiper;
});
