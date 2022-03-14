function toggleVideo() {
    const trailer = document.querySelector('.trailer');
    const video = document.querySelector('video');
    trailer.classList.toggle('active');

    video.currentTime = 0;
    video.pause();
}


var mySwiper = new Swiper('.swiper-container', {
    spaceBetween: 5,
    slidesPerView: 2,
    loop: true,
    freeMode: true,
    loopAdditionalSlides: 5,
    speed: 500,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        640: {
            slidesPerView: 5,
            slidesPerGroup: 5,
            freeMode: false
        }
    }
})