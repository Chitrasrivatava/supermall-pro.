 var swiper = new Swiper(".mySwiper", {
      loop:true,
      spaceBetween:20,

      autoplay:{
        delay: 7500,
        disableOnInteraction: false,
      },
      
      breakpoints: {
        "@0.00": {
          slidesPerView: 1,
          
        },
        "@768": {
          slidesPerView: 2,
          
        },
        "@1020": {
          slidesPerView: 3,
          
        },
        
      },
    });
