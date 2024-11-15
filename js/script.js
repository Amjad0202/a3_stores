// Initialize testimonials slider
new Swiper('.testimonial-slider', {
    slidesPerView: 1,
    spaceBetween: 20,
    autoplay: {
        delay: 5000,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});