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
    });
    
    albumswiper.on('slideChange', function () {
        $("#dsg2").prop("checked", true);
            var i = albumswiper.activeIndex;
    
            // $('label').removeClass('on');
            $('label').eq(i).addClass('on');
        });
        $('label').click(function(){
            var idx = $(this).index()
            albumswiper.slideNext(idx,1000,false);
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
})