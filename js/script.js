$(document).ready(()=>{
    var mySwiper = new Swiper('.swiper-container', {
        
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
            
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },

        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
        },
        
        slidesPerView:'auto',
        spaceBetween: 960,
        slidesOffsetAfter: 960,
    });
});