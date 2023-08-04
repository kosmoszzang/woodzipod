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
