import Swiper from 'https://unpkg.com/swiper@7/swiper-bundle.esm.browser.min.js'

export const swiper = new Swiper('.swiper', {

    direction: 'horizontal',
    spaceBetween: 30,
    slidesPerView: '1',
    centeredSlides: true,
    loop: true,
  
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
        clickable: true,
    },
  
    // Navigation arrows
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
  
    
});