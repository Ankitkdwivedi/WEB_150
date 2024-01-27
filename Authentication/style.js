var swiper = new Swiper(".gallery-slider", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 20,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    loop:true,
    autoplay:{
      delay: 3000,
      disableOnInteraction:false,
    }
  });