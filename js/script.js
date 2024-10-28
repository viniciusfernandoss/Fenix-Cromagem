const swiperTwo = new Swiper('.swiper-servicos-mobile', {
    breakpoints: {
             0: {
                 slidesPerView: 1
             },
             992: {
                 slidesPerView: 2
             },
             1024: {
                 slidesPerView: 3
             }
    },
    // navigation: {
    //         nextEl: '.swiper-case-sucesso-mobile .swiper-button-next',
    //         prevEl: '.swiper-case-sucesso-mobile .swiper-button-prev',
    // },
    spaceBetween: 30, // Espaço entre os slides
    loop: true,
    pagination: {
      el: '.swiper-servicos-mobile .swiper-pagination',
      clickable: true,
    },
});